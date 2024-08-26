import React, { useState } from 'react';
import axios from 'axios';

const UploadContent = () =>
{
    const [ subject, setSubject ] = useState('physicalChemistry');
    const [ section, setSection ] = useState('videoLectures');
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ file, setFile ] = useState(null);
    const [ success, setSuccess ] = useState('');
    const [ error, setError ] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const formData = new FormData();
        formData.append('subject', subject);
        formData.append('section', section);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);

        try
        {
            const token = localStorage.getItem('adminToken');
            if (!token)
            {
                throw new Error('No token found');
            }

            console.log('Token:', token);
            console.log('Form Data:', formData);
            console.log('Headers:', {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            });

            const response = await axios.post('http://localhost:5000/api/content/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            });

            console.log('Response:', response);
            setSuccess('Content uploaded successfully!');
            setError('');
        } catch (error)
        {
            console.error('Error uploading content:', error.response ? error.response.data : error.message);
            setError('Failed to upload content');
            setSuccess('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Upload Content</h1>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="physicalChemistry">Physical Chemistry</option>
                <option value="inorganicChemistry">Inorganic Chemistry</option>
                <option value="organicChemistry">Organic Chemistry</option>
            </select>
            <select value={section} onChange={(e) => setSection(e.target.value)}>
                <option value="videoLectures">Video Lectures</option>
                <option value="testSeries">Test Series</option>
            </select>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input
                type="file"
                accept={section === 'videoLectures' ? 'video/*' : 'application/pdf'}
                onChange={(e) => setFile(e.target.files[ 0 ])}
                required
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadContent;
