import React,{useState} from "react";

export default function TextForm(props) {
  const [text,setText]=useState('');
  const handleUpClick=()=>{
    //console.log('Uppercase was clicked');
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleExtraSpace=()=>{
    // setText(text.replace(/\s+/g,' ').trim())
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed extra spaces","success");
  }
  const handleCopy=()=>{
    let text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")
  }
  const handleClrClick=()=>{
    setText('');
    props.showAlert("Text cleared","success");
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleOnChange=(event)=>{
    //console.log('On change');
    setText(event.target.value);
  }
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
    props.showAlert("Converted to sentence case","success");
  }
  // text="abcd" - wrong way to change state !
  // setText("abcd") - correct way to change state
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows="8"
          style={{backgroundColor:props.mode==='light'?'white':'grey'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" id="U" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleSenClick}>Convert to Sentence Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>remove Extra Spaces</button>
      </div>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length>0}).length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length>0}).length} - Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
