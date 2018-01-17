import React from "react"
import Form from "components/form/form"
import Category from "components/category/category"
import Threads from "components/threads/threads"

const newQuestionForm = [
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

class App extends React.Component {

  render() {
    return (
      <div className="forum-page">
        <div className="forum-top">
          <h1>MongoDB Forum</h1>
        </div>
        <div className="forum-body">
          <div className="question-container">
            <Category />
            <h2>Latest questions</h2>
            <Threads />
          </div>
          <div className="question-form">
            <h2>Post a question</h2>
            <Form
              formInput={newQuestionForm} />
          </div>
        </div>
      </div>
    )
  }

}

export default App
