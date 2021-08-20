import React, {useState} from 'react'

export default function TextField(props) {

    const [text, setText] = useState('');
    const upClickHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const changeHandler = (event) => {
        setText(event.target.value);
    }
    const loClickHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clClickHandler = () => {
        let newText = '';
        setText(newText);
    }
    const coClickHandler = () => {
        var text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const rsClickHandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="textbox" rows="8" value={text} onChange={changeHandler}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={upClickHandler}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={loClickHandler}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={rsClickHandler}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={coClickHandler}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2" onClick={clClickHandler}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary:</h2>
                <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
