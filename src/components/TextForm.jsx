import React, { useState } from 'react';

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopyChange = () => {
        const textarea = document.getElementById('textarea');
        textarea.select();
        document.execCommand('copy');
        alert("Text copied");
    }

    const handleExtraChange = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
    }

    const handleClearText = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="box">
                <textarea
                    className='text-area'
                    value={text}
                    onChange={handleOnChange}
                    placeholder='enter text here'
                    id='textarea' rows={5} cols={10}
                ></textarea>
                <div className="button">
                    <button className="btn-btn-primary" onClick={handleUpClick}> Uppercase </button>
                    <button className="btn-btn-primary" onClick={handleDownClick}> Lowercase </button>
                    <button className="btn-btn-primary" onClick={handleCopyChange}> Copy Text </button>
                    <button className="btn-btn-primary-1" onClick={handleExtraChange}> Remove Extra Spaces </button>
                    <button className="btn-btn-primary" onClick={handleClearText}> Clear Text </button>
                </div>
            </div>
            <div className="para">
                <p>Words: {text.split(/\s+/).filter(word => word.trim() !== '').length}</p>
                <p>Characters: {text.length}</p>
                <p>Time-Taken: {0.008 * text.length}</p>
                <p>Preview: {text}</p>
            </div>
        </div>
    )
}
