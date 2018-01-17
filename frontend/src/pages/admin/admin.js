import React from "react"
import Category from "components/category/category"
import Threads from "components/threads/threads"

const AdminResponseForm = [
  { inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:" },
  { inputName: "sender", inputType: "text", inputPlaceHolder: "Your name here:" },
  { inputName: "published", inputType: "radio", inputPlaceHolder: "Is this published?" },
  { inputName: "handled", inputType: "radio", inputPlaceHolder: "Has this been handled?" }
]

const today = "2018-01-17" // get date somehow

export default class Admin extends React.Component {

  render() {
    return (
      <div className="forum-page">
        <div className="forum-top">
          <h1>MongoDB Admin</h1>
        </div>
        <div className="forum-body">
          <div className="question-container">
            <Category />
            <h2>Latest questions</h2>
            <Threads
              formInput={AdminResponseForm}
              type="adminResponse"
              date={today} />
          </div>
        </div>
      </div>
    )
  }
}
