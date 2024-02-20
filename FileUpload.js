import React, { useState } from 'react';
// Add this line at the top of your src/components/Login.js
import './FileUpload.css';

const FileUpload = ({ onBack }) => {
    const [files, setFiles]
        = useState([]);

    const handleFileChange = (event) => {
        setFiles([...event.target.files]);
        // You would handle file upload here
    };

    const handleFileUpload = () => {
        // Handle the file processing and uploading here
    };

    return (
        <div className="file-upload-container">
            <h2>RICHTER BAUSTOFFE</h2>
            <div>
                <button onClick={handleFileUpload}>pdf Datenblätter hochladen</button>
                <input type="file" multiple onChange={handleFileChange} />
            </div>
            <div>
                <button onClick={handleFileUpload}>Ausführen</button>
            </div>
            <div>
                <button onClick={onBack}>Zurück</button>
            </div>
            {files.map((file, index) => (
                <div key={index}>{file.name}</div>
            ))}
        </div>
    );
};

export default FileUpload;