import React from "react"
import Form from "components/form/form"

class App extends React.Component {

  render() {
    return (
      <div className="forum-page">
        <div className="forum-top">
          <h1>MongoDB Forum</h1>
        </div>
        <div className="forum-body">
          <div className="question-container">
            <ul>
              <li>What is mongoose and how do I install it?</li>
              <li>I am running my server on localhost8080,
                but what if I want to deploy my site?
              </li>
              <li>What is MungoDB, and how do I install it?</li>
              <li>Why can I not install my MOngoDB?</li>
              <li>What is Compass and how do I install it?</li>
            </ul>
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
