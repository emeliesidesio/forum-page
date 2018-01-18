import React from "react"
import Category from "components/category/category"
import Threads from "components/threads/threads"

import "./admin.css"

const AdminResponseForm = [
  { inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:" },
  { inputName: "sender", inputType: "text", inputPlaceHolder: "Your name here:" },
  { inputName: "published", inputType: "radio", inputPlaceHolder: "Is this published?" },
  { inputName: "handled", inputType: "radio", inputPlaceHolder: "Has this been handled?" }
]

export default class Admin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filterVariable: ""
    }
  }

  categoryClick = cate => {
    console.log("This is the admin component speaking about category", cate)
    this.setState({
      filterVariable: cate
    }, () => {
      console.log(this.state.filterVariable)
    })
  }

  render() {
    return (
      <div className="forum-page">
        <div className="admin-top">
          <h1>MongoDB Admin</h1>
        </div>
        <div className="forum-body">
          <div className="question-container">
            <div className="category-button-color">
              <Category
                categoryClick={this.categoryClick} />
            </div>
            <h2 className="question-heading-latest">Latest questions</h2>
            <Threads
              formInput={AdminResponseForm}
              filterVariable={this.state.filterVariable}
              type="adminResponse" />
          </div>
        </div>
      </div>
    )
  }
}
