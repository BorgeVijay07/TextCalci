import React, {useState} from 'react'

export default function TextField(props) {

    const [text, setText] = useState('Enter Text Here');
    const upClickHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const changeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textbox" rows="8" value={text} onChange={changeHandler}></textarea>
            </div>
            <button className="btn btn-primary" onClick={upClickHandler}>Convert to Uppercase</button>
        </>
    )
}
