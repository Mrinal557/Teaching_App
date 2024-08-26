// src/controllers/contentController.js
const Lecture = require('../models/Lecture');
const TestSeries = require('../models/TestSeries');

const uploadContent = async (req, res) => {
    try {
        const { subject, section, title, description } = req.body;
        const fileUrl = req.file.path; // Path where the file is stored

        let content;

        if (section === 'videoLectures') {
            content = new Lecture({
                subject,
                section,
                title,
                description,
                url: fileUrl,
                uploadedBy: req.admin._id,
            });
        } else if (section === 'testSeries') {
            content = new TestSeries({
                subject,
                section,
                title,
                description,
                url: fileUrl,
                uploadedBy: req.admin._id,
            });
        }

        await content.save();
        res.status(201).json({ message: 'Content uploaded successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getContentBySubjectAndSection = async (req, res) => {
    const { subject, section } = req.params;

    try {
        let content;

        if (section === 'videoLectures') {
            content = await Lecture.find({ subject, section });
        } else if (section === 'testSeries') {
            content = await TestSeries.find({ subject, section });
        }

        res.status(200).json(content);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    uploadContent,
    getContentBySubjectAndSection,
};
