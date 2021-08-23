import React, {useState} from 'react'

export default function TextField(props) {

    const [text, setText] = useState('');
    const upClickHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }
    const changeHandler = (event) => {
        setText(event.target.value);
    }
    const loClickHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }
    const clClickHandler = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success")
    }
    const coClickHandler = () => {
        var text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success")
    }
    const rsClickHandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces!", "success")
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="textbox" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} rows="8" value={text} onChange={changeHandler}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={upClickHandler}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={loClickHandler}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={rsClickHandler}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={coClickHandler}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2" onClick={clClickHandler}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary:</h2>
                <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Something To Prieviw It Here'}</p>
            </div>
        </>
    )
}
