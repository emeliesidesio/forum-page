import React from "react"
import Form from "components/form/form"
import Category from "components/category/category"

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
            <ul className="accordion-list">
              <h2>Latest questions</h2>
              <li>What is mongoose and how do I install it?</li>
              <li>I am running my server on localhost8080,
                but what if I want to deploy my site?
              </li>
              <li>What is MongoDB, and how do I install it?</li>
              <li>Why can I not install my MongoDB?</li>
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
