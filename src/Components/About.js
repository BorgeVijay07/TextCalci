// import React, {useState} from 'react'
import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setbtnText] = useState('Dark')

    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText('Dark')
    //     }else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtnText('Light')
    //     }
        
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#13466e':'white',
        border: props.mode === 'dark'?'1px solid white':null
        // borderColor: props.mode === 'dark'?'white':'black',
    }
    
    return (
        <>
            <div className="container">
                <h1 className="my-3" style={{color: props.mode === 'dark'?'white':'black'}}>About US</h1>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>What Is TextCalci ?</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextCalci</strong> gives you a way to analyze your text quickly and efficiently. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>How It Works ?</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        It takes your text as input and gives you word and character count with its reading time. You can formate your text and Convert
                        it to uppercase and lowercase. You can also copy the text to clipboard and can clear the text. Yow can preview your text in Preview section. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Why I Did This Project ?</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        I strted to revise my React concepts and then come through this project so that I can use those concepts to real world problem. Credit goes to Code With Harry.
                    </div>
                    </div>
                </div>
                </div>
                {/* <div className="container my-3">
                    <button type="button" className="btn btn-primary" onClick={toggleStyle}>Enable {btnText} Mode</button>
                </div> */}
            </div>
        </>
    )
}
