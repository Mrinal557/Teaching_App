// src/components/ViewContent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewContent = () => {
    const [subject, setSubject] = useState('physicalChemistry');
    const [section, setSection] = useState('videoLectures');
    const [content, setContent] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const response = await axios.get(`http://localhost:5000/api/content/${subject}/${section}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                setContent(response.data);
            } catch (error) {
                setError('Failed to fetch content');
            }
        };

        fetchContent();
    }, [subject, section]);

    return (
        <div>
            <h1>View Content</h1>
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
            <div>
                {content.map((item) => (
                    <div key={item._id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        {section === 'videoLectures' ? (
                            <video controls src={`http://localhost:5000/${item.url}`} />
                        ) : (
                            <a href={`http://localhost:5000/${item.url}`} target="_blank" rel="noopener noreferrer">View PDF</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewContent;
