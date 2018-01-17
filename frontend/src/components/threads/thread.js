import React from "react"
import Form from "components/form/form"
import "./thread.css"

const commentForm = [
  { inputName: "id", inputType: "text", inputPlaceHolder: "Question ID" },
  // { inputName: "threadNo", inputType: "text", inputPlaceHolder: "Thread Number" },
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

  constructor(props) {
    super(props)
    this.state = {
      forumThread: []
    }
  }

  handleThreadItems = threadNo => {
    fetch(`http://localhost:8082/questions/${threadNo}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        forumThread: json
      })
      console.log("Tråden från DB", this.state.forumThread)
    })
  }

  // En funktion som visar tråden när vi klickar på titeln. Toggleclass, fetch med threadNo.
  handleTitleClick = () => {
    const threadNo = this.props.item.threadNo
    console.log("tråd", threadNo)
    this.handleThreadItems(threadNo)
  }

  render() {
    return (
      <ul className="accordion-list">
        <li onClick={this.handleTitleClick}>{this.props.item.title}, {this.props.item.threadNo}</li>
        {this.state.forumThread.map(item => {
          return (
            <div>{item.text}, {this.props.item.threadNo}</div>
          )
        })}
        <Form
          formInput={commentForm}
          threadNo={this.props.item.threadNo} />
      </ul>
    )
  }
}
