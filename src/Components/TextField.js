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
        document.getSelection().removeAllRanges();
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
                <h1 className="my-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="textbox" style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'black':'white'}} rows="8" value={text} onChange={changeHandler}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upClickHandler}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={loClickHandler}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={rsClickHandler}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={coClickHandler}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clClickHandler}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary:</h2>
                <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> Characters</p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing To Preview'}</p>
            </div>
        </>
    )
}
