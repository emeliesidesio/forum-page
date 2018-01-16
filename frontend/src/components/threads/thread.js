import React from "react"
import Form from "components/form/form"
import "./thread.css"

const commentForm = [
  { inputName: "id", inputType: "text", inputPlaceHolder: "Question ID" },
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

  render() {
    return (
      <ul className="accordion-list">
        <li>{this.props.item.text}</li>
        <Form
          formInput={commentForm} />
      </ul>
    )
  }
}
