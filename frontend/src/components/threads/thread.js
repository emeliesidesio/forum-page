import React from "react"
import Form from "components/form/form"
import "./thread.css"

const commentForm = [
  { inputName: "id", inputType: "text", inputPlaceHolder: "Question ID" },
  { inputName: "threadNo", inputType: "text", inputPlaceHolder: "Thread Number" },
  { inputName: "type", inputType: "text", inputPlaceHolder: "Question Type" },
  { inputName: "title", inputType: "text", inputPlaceHolder: "Question title" },
  { inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:" },
  { inputName: "date", inputType: "text", inputPlaceHolder: "Date of submission:" },
  { inputName: "sender", inputType: "text", inputPlaceHolder: "Your name here:" },
  { inputName: "published", inputType: "radio", inputPlaceHolder: "Is this published?" },
  { inputName: "handled", inputType: "radio", inputPlaceHolder: "Has this been handled?" },
  { inputName: "image", inputType: "text", inputPlaceHolder: "Upload your picture" }
]

export default class Thread extends React.Component {

  // En funktion som visar tråden när vi klickar på titeln. Toggleclass, fetch med threadNo.

  handleTitleClick = () => {
    const threadNo = this.props.item.threadNo
    console.log("tråd", threadNo)
  }

  handleThreadItems = threadNo => {
    fetch("http://localhost:8082/questions", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      return response.json()
    })
  }

  render() {
    return (
      <ul className="accordion-list">
        <li onClick={this.handleTitleClick}>{this.props.item.title}</li>
        <Form
          formInput={commentForm} />
      </ul>
    )
  }
}
