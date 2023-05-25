import React,{useState} from "react";

export default function TextForm(props) {
  const [text,setText]=useState('Enter text here');
  const handleUpClick=()=>{
    //console.log('Uppercase was clicked');
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleExtraSpace=()=>{
    // setText(text.replace(/\s+/g,' ').trim())
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const handleCopy=()=>{
    let text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    alert('Copied to clipboard');
  }
  const handleClrClick=()=>{
    setText('');
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    //console.log('On change');
    setText(event.target.value);
  }
  let g=text.split(" ").length;
  const handleSenClick=()=>{
    let arr=text.split(" ");
    if(arr.length>1)
    {
      let newText=arr[0].charAt(0).toUpperCase()+arr[0].slice(1).toLowerCase();
      for(let i=1;i<arr.length;i++)
      {
        if(arr[i-1].charAt(arr[i-1].length-1)==='.')
        {
          let str=arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
          newText+=" "+str;
        }
        else 
        {
          newText+=" "+arr[i].toLowerCase();
        }
      }
      setText(newText);
    }
    else 
    {
      let newText=text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
      setText(newText);
    }
  }
  // text="abcd" - wrong way to change state !
  // setText("abcd") - correct way to change state
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleSenClick}>Convert to Sentence Case</button>
      <button className="btn btn-primary mx-3" onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters . ..... {g}</p>
        <p>{0.008*text.split(" ").length} - Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
