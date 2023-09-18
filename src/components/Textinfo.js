import React, { useState } from 'react'

export default function Textinfo(props) {
    const upperCaseHandler = () => {
        console.log("UpperCase was clicked " + text);
        let setUpperCase = text.toUpperCase();
        settext(setUpperCase);
        props.showAlerts("Converted to UpperCase", "success")
    }
    const lowerCaseHandler = () => {
        console.log("LowerCase Clicked " + text);
        let setLowerCase = text.toLowerCase();
        settext(setLowerCase);
        props.showAlerts("Converted to Lowercase", "success");
    }
    const resetHandler = () => {
        console.log("Clear Text")
        let clearText = ("");
        settext(clearText);
        props.showAlerts("Your text is cleared", "success");
    }
    const copyHandler = () => {
        console.log("Copy text");
        let textCopy = document.getElementById("changeText");
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value);
        props.showAlerts("Your text is copied", "success");
    }
    const onChangedHandler = (event) => {
        console.log("onChnaged Clicked");
        settext(event.target.value);
    }
    const [text, settext] = useState(" ");
    // text = "new state"; // wrong way to chnage the state value
    // settext("new State"); // correct way to change the state
  return (
    <>
    
<div className="container my-3" style = {{color: props.mode === "light" ? "black" : "white"}}>
    <h1>{props.heading}</h1>
    <div className="my-3">
        <textarea className="form-control" value={text} onChange={onChangedHandler} style = {{backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white"}} id="changeText" rows="8"></textarea>
    </div> 
    <button className="btn btn-primary mx-2" onClick={upperCaseHandler} >Convert to Uppercase</button> 
    <button className="btn btn-success mx-2 " onClick={lowerCaseHandler} >Convert to Lowercase</button> 
    <button className="btn btn-info mx-2 " onClick={resetHandler} >Clear or Reset Text</button> 
    <button className="btn btn-danger mx-2 " onClick={copyHandler} >Copy Text</button> 
</div>
<div className="container" style = {{color: props.mode === "light" ? "black" : "white"}}>
    <h2>Your Text Summary</h2>
    <p>Your text contains <strong>{text.split(' ').length-1}</strong> words and <strong>{text.length}</strong> characters long.</p>
    <p>Normal time to read your written text are <strong>{0.008*text.split(' ').length}</strong> minutes.</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter something in the Textbox above to preview it here"}</p>
</div>
</>
  )
}
