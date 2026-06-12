import React, { useState } from 'react';

function Text(props) {

  const [text, setText] = useState('');
   const [searchWord, setSearchWord] = useState("");
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
   const countWord = () => {
  return text
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word === searchWord.toLowerCase())
    .length;
    
};
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
  <h1>enter the text to be edited</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1"value={text} onChange={onchangeevent} style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'black'}}rows="3"></textarea>
</div>
<button className="btn btn-primary mx-2"onClick={onclickchange}>convert to uppercase</button>
<button className="btn btn-primary mx-2"onClick={onclickdchange}>convert to lowercase</button>
<button className="btn btn-primary mx-2"onClick={onclickcchange}>  clear the text</button>
<button className="btn btn-primary mx-2"onClick={speak}>  speak</button>
<button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2"onClick={copyText}>copy text</button>
    </div>
    <div className="container my-5">
       <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="Enter word"
        style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'black'}}
        />
      <button className="btn btn-primary mx-3" onClick={countWord}>count word</button>
      <h5 style={{color:props.mode==='light'?'black':'white'}}><p>
  Occurrences of "<b>{searchWord}</b>" : {countWord()}
</p></h5>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>text summary</h3>
      <p>the no of words are {text.split(" ").length} and character are are {text.length}</p>
      <h4>preview</h4>{
        <p>{text}</p>
      }
    </div>
    </>
  );
} 
export default Text;
