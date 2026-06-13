import React, { useState } from 'react';

function Text(props) {

  const [text, setText] = useState('');
   
  const onclickchange=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("the text is converted to uppercase","success");
  }
  const onclickdchange=()=>{
    let newText1=text.toLowerCase();
    setText(newText1);
     props.showAlert("the text is converted to lowercase","success");
  }
  const onclickcchange=()=>{
    setText(' ');
     props.showAlert("the text is cleared","success");
  }
   const onchangeevent=(event)=>{
    setText(event.target.value);
    
  }
   
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert(" speaker are allowed to speak","success");
}
const handleExtraSpaces = ()=>{
 let newText = text.replace(/\s+/g, ' ').trim();
setText(newText)
props.showAlert("the extra spaces are removed successfully","success");
}
const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("the text is copied succesfully","success");
 }


  return (
    <>
    <div className="container " style={{color:props.mode==='light'?'black':'white'}}>
     
<div className="mb-3">
  <h2>Text Editor | Word Counter| UpperCase To LowerCase|LowerCase To UpperCase</h2>
  <textarea className="form-control mt-3" id="exampleFormControlTextarea1"value={text} onChange={onchangeevent} style={{backgroundColor:props.mode==='dark'?'#284255':'white',color:props.mode==='dark'?'white':'black'}}rows="3"></textarea>
</div>
<button disabled={text.length===0}
 className="btn btn-primary mx-2"onClick={onclickchange}>convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2"onClick={onclickdchange}>convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2"onClick={onclickcchange}>  clear the text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2"onClick={speak}>  speak</button>
<button disabled={text.length===0} className="btn btn-primary mx-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-2"onClick={copyText}>copy text</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>text summary</h3>
      <p>the no of words are {text.split(" ").filter((Element)=>{return Element.length!==0}).length} and character are are {text.length} </p>
      <p>The Time Taken To Read The Text is: {0.008*text.split(" ").filter((Element)=>{return Element.length!==0}).length} minutes </p>
      <h4>preview</h4>{
        <p>{text}</p>
      }
    </div>
    </>
  );
} 
export default Text;
