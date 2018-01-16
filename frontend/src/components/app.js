import React from "react"
import Form from "components/form/form"
import Category from "components/category/category"
import Threads from "components/threads/threads"

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
            <Form />
          </div>
        </div>
      </div>
    )
  }

}

export default App
