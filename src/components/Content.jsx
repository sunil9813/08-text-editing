import React, { useState } from "react"

const Content = () => {
  const [text, setText] = useState("")

  const changeHandle = (event) => {
    setText(event.target.value)
  }

  const upperCaseText = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const lowerCaseText = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const capitalizeText = () => {
    /*
	  / / => syntax of regular expression
	  \w  => metacharacter matches word characters.
      \b  => matches the empty string at the beginning or end of a word.
	  /g  => is for global search
	*/
    let newText = text.replace(/\b(\w)/g, (text) => text.toUpperCase())
    setText(newText)
  }

  const copyText = () => {
    navigator.clipboard.writeText(text)
  }

  const clearText = () => {
    setText("")
  }

  const undoText = async () => {
    const text = await navigator.clipboard.readText()
    setText(text)
  }

  const removeSpace = () => {
    // yati 1 ota bhnada badi space xa bhane teyoo chai cut hunxa
    // i.e sabai space lai array ma store garxa ani remove gardenxa
    let newText = text.split(/[ ] + /)
    setText(newText.join(" "))
  }

  const underlineText = () => {
    document.querySelector("#text").style.textDecoration = "underline"
  }
  const boldText = () => {
    document.querySelector("#text").style.fontWeight = "700"
  }
  const fontSizeInc = () => {
    document.querySelector("#text").style.fontSize = "20px"
  }
  const italicText = () => {
    document.querySelector("#text").style.fontStyle = "italic"
  }

  const searchText = () => {
    let str = prompt("enter the string you wanna search :")
    let newText = text.includes(str, 0)
    if (newText == true) {
      setText("the string " + str + " is present..")
    } else {
      setText("the string " + str + " is not present..")
    }
  }

  const readText = () => {
    let speech = new SpeechSynthesisUtterance()
    speech.text = text
    window.speechSynthesis.speak(speech)
  }
  const downloadFile = () => {
    //function for downloding text
    const file = document.createElement("a")
    let newText = new Blob([text], {
      type: "text/plain",
    })
    file.href = URL.createObjectURL(newText)
    file.download = "myFile.txt"
    document.body.appendChild(file)
    file.click()
  }

  const centerText = () => {
    document.querySelector("#text").style.textAlign = "center"
  }
  const leftText = () => {
    document.querySelector("#text").style.textAlign = "left"
  }
  const rightText = () => {
    document.querySelector("#text").style.textAlign = "right"
  }
  const rightJustify = () => {
    document.querySelector("#text").style.textAlign = "justify"
  }

  return (
    <>
      <section className='content'>
        <div className='functionButton'>
          <button onClick={upperCaseText}>
            <i>Aa</i>
            <span>UpperCase</span>
          </button>
          <button onClick={lowerCaseText}>
            <i>a</i>
            <span>LowerCase</span>
          </button>
          <button onClick={capitalizeText}>
            <i>Aa</i>
            <span>capitalize </span>
          </button>
          <button onClick={copyText}>
            <i className='fa fa-copy'></i>
            <span>copy </span>
          </button>
          <button onClick={clearText}>
            <i class='fa fa-eraser'></i>
            <span>clear </span>
          </button>
          <button onClick={undoText}>
            <i class='fa fa-paste'></i>
            <span>paste </span>
          </button>
          <button onClick={removeSpace}>
            <i> - </i>
            <span>Remove Space </span>
          </button>
          <button onClick={underlineText}>
            <i class='fa fa-underline'></i>
            <span>underline </span>
          </button>
          <button onClick={boldText}>
            <i class='fa fa-bold'></i>
            <span>bold </span>
          </button>
          <button onClick={fontSizeInc}>
            <i class='fa fa-arrow-up'></i>
            <span>font Size </span>
          </button>
          <button onClick={italicText}>
            <i class='fa fa-italic'></i>
            <span>italic </span>
          </button>
          <button onClick={searchText}>
            <i class='fa fa-search'></i>
            <span>search </span>
          </button>
          <button onClick={readText}>
            <i class='fa fa-bullhorn'></i>
            <span>read Text </span>
          </button>
          <button onClick={downloadFile}>
            <i class='fa fa-download'></i> <span>download </span>
          </button>
          <button onClick={leftText}>
            <i class='fa fa-align-left'></i>
            <span>left text </span>
          </button>
          <button onClick={centerText}>
            <i class='fa fa-align-center'></i> <span>center text </span>
          </button>
          <button onClick={rightText}>
            <i class='fa fa-align-right'></i>
            <span>center text </span>
          </button>
          <button onClick={rightJustify}>
            <i class='fa fa-align-justify'></i>
            <span> justify text</span>
          </button>
        </div>
        {/*<div className='functionButton'>
          <button onClick={upperCaseText}>Upper Case</button>
          <button onClick={lowerCaseText}>Lower Case</button>
          <button onClick={capitalizeText}>Capitalize </button>
          <button onClick={copyText}>Copy</button>
          <button onClick={clearText}>Clear</button>
          <button onClick={undoText}>Redo </button>
          <button onClick={removeSpace}>Remove Space</button>
          <button onClick={underlineText}>Underline Text </button>
          <button onClick={boldText}>Bold </button>
          <button onClick={fontSizeInc}>Font Size </button>
          <button onClick={italicText}>Italic Text </button>
          <button onClick={searchText}>Search </button>
          <button onClick={readText}>Read Text </button>
          <button onClick={downloadFile}>Download </button>
          <button onClick={centerText}>Center </button>
          <button onClick={leftText}>Left </button>
          <button onClick={rightText}>Right </button>
          <button onClick={rightJustify}>justify </button>
        </div>*/}
        <div className='textView'>
          <textarea cols='30' rows='10' value={text} onChange={changeHandle} id='text'></textarea>

          <h3>
            {text.split(" ").length} Word {text.length} Character
          </h3>
          {/*<p className='text'>{text}</p>*/}
        </div>
      </section>
    </>
  )
}

export default Content
