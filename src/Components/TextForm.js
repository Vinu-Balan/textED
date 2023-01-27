import React, {useState} from 'react'


export default function TextForm(props) {

    const handleWordCount = (e) =>{
        setCountWord(e.target.value);
    }
    const handleOldWordChange=(e)=>{
        setOldWord(e.target.value);
    }
    const handleNewWordChange=(e)=>{
        setNewWord(e.target.value);
    }
    const handleCountWord=()=>{
        if (c===0){
            props.showAlert("Enter the text to count","danger ");
        }
        else{
        setWordCount(0);
        console.log(countWord);
        let words = text.split(" ");
        let count = 0;
        for(let i=0;i<words.length;i++){
            if(words[i]===countWord){
                count++;
            }
        }
        setWordCount(count);
        props.showAlert("Found the count","success ");
        }
    }
    const handleReplace=()=>{
        if (c===0){
            props.showAlert("Enter the text to replace","danger ");
        }
        else{
        String.prototype.replaceAll = function (searchString, replaceString) {
            var str = this;
            // there are no matches in string?
            if (str.indexOf(searchString) === -1) {
              // return string
              return str;
            }
            // replace and remove the first match, and perform another recursive search/replace
            return (str.replace(searchString, replaceString)).replaceAll(searchString, replaceString);
          }
          // usage:
        let newText = text.replaceAll(oldWord, newWord);
        console.log(newText);
        setText(newText);
        props.showAlert("Replaced successfully","success ");
        }
    }
    const handleUPclick=()=>{
        if (c===0){
            props.showAlert("Enter the text to convert","danger ");
        }
        else{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success ");}
    }
    const handleLWclick=()=>{
        if (c===0){
            props.showAlert("Enter the text to convert","danger ");
        }
        else{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success ");}
    }
    
    const handleINclick=()=>{
        let word = text.split(" ");
        let newText = '';
        if (c===0){
            props.showAlert("Enter the text to convert","danger ");
        }
        else{
        for(let i=0;i<word.length;i++){
            if (i===word.length-1){
                newText += word[i].charAt(0).toUpperCase()+word[i].slice(1); 
            }
            else{
                newText += word[i].charAt(0).toUpperCase()+word[i].slice(1)+" ";
            }
        }
        setText(newText);
        props.showAlert("Converted to Title Case!","success ");}
    }
    const handleclearclick=()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!","success ");
        setC(0);
    }
    const handleExtraSpaces=()=>{
        if (c===0){
            props.showAlert("Enter the text to be changed","danger ");
        }
        else{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!","success ");}
    }
    const handleCopy=()=>{
        if (c===0){
            props.showAlert("Enter the text to copy","danger ");
        }
        else{
        var newText = document.getElementById("TextBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard!","success ");}
    }
    const handleONchange=(event)=>{
        setText(event.target.value);
        handleCount(event.target.value);
    }
    const [c,setC] = useState(0);
    const handleCount= (text) =>{
        const splitted = text.split(" ");
        let c = 0;
        for(let i=0;i<splitted.length;i++){
            if(splitted[i]===''){
                ;
            }else{
                c++;
            }
        }
        setC(c);
    }
  const [text,setText] = useState('');
  const [wordCount,setWordCount]  = useState(0);
  const [countWord,setCountWord] = useState("");
  const [oldWord,setOldWord] = useState("");
  const [newWord,setNewWord] = useState("");
  const [urlink,setURL] = useState("");
  return (
    <>
    <div className='container-fluid' style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
    <div className='row my-2'>
    <label for="TextBox" className="form-label col-md-9 col-xs-2"><h3>{props.heading}</h3></label>
    <button className="btn btn-primary ml-5 col-md-1 w-25 col-xs-9" onClick={handleCopy}>Copy</button>
    </div>
        <textarea className="form-control" value={text} onChange={handleONchange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="TextBox" rows="8"/>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p>{c} words and {text.length} characters</p>
        <p>{0.008*c} Minutes to read</p>
        {/* <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the text box to preview it'}</p> */}
    </div>
    <div className='Buttons'>
    <div className='form-group border p-4 border rounded m-2'>
    <button className="btn btn-primary  mt-xs-5 mb-3 " onClick={handleCountWord}>Count of the word</button>
    <div className='row'>
        <label for="countword">Enter the word to be counted</label>
        <input onChange={handleWordCount} type="text" className="form-control" id='countword' placeholder='Enter the word...' />
        <h2 className='m-2'>Word Count: {wordCount}</h2>
    </div>
    </div>
    <div className='form-group border p-4 border rounded m-2 px-sm-5'>
    <button className="btn btn-primary  mt-xs-5 mb-3 " onClick={handleReplace}>Replace</button>
    <div className='flex-md row col-sm'>
    <div className='my-2 col-md-5'>
        <label for="countword">Enter the old word</label>
        <input onChange={handleOldWordChange} type="text" className="form-control" id='countword' placeholder='Enter the word...' />
    </div>
    <div className='my-2 col-md-5'>
        <label for="countword">Enter the new word</label>
        <input onChange={handleNewWordChange} type="text" className="form-control" id='countword' placeholder='Enter the word...' />
    </div>
    </div>
    </div>
    <div className='form-group border p-4 border rounded m-2 container'>
    <div className='row'>
    <div className=' col-md-2'>
    <button className="btn btn-primary mt-xs-5 mb-3 " onClick={handleUPclick}>UpperCase</button>
    </div>
    <div className='col-md-2'>
    <button className="btn btn-primary  mt-xs-5 mb-3 " onClick={handleLWclick}>LowerCase</button>
    </div>
    <div className='col-md-3'>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className='col-md-2'>
    <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear</button>
    </div>
    <div className='col-md-2'>
    <button className="btn btn-primary mx-1" onClick={handleINclick}>Titlecase</button>
    </div>
    </div>
   
    
    </div>
        
{/*         
        <button className="btn btn-primary mx-1 mt-lg-1 mt-xs-5" onClick={handleLWclick}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleINclick}>Titlecase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear</button> */}
    </div>
    </div>
    </>
  )
}
