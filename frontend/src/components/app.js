import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

import Form from "components/form/form"
import Category from "components/category/category"
import Threads from "components/threads/threads"
import Admin from "pages/admin/admin"

const newQuestionForm = [
  { inputName: "title", inputType: "text", inputPlaceHolder: "Question title" },
  { inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:" },
  { inputName: "sender", inputType: "text", inputPlaceHolder: "Your name here:" }
]

const responseForm = [
  { inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:" },
  { inputName: "sender", inputType: "text", inputPlaceHolder: "Your name here:" }
]

const today = "2018-01-17" // get date somehow

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="forum-page">
          <div className="forum-top">
            <h1>MongoDB Forum</h1>
          </div>
          <div className="forum-body">
            <div className="question-container">
              <Category />
              <h2>Latest questions</h2>
              <Threads
                formInput={responseForm}
                type="response"
                date={today} />
            </div>
            <div className="question-form">
              <h2>Post a question</h2>
              <Form
                formInput={newQuestionForm}
                type="newQuestion"
                date={today} />
            </div>
          </div>

          <Route path="/admin" component={Admin} />

          <Link to="/admin">Admin</Link>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
