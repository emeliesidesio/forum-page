import React from "react"
import Form from "components/form/form"
import "./thread.css"

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
        <li onClick={this.handleTitleClick}>{this.props.item.title}</li>
        {this.state.forumThread.map(item => {
          return (
            <div>{item.text}{item.sender}</div>
          )
        })}
        <div className="thread-form">
          <Form
            formInput={this.props.formInput}
            threadNo={this.props.item.threadNo}
            type={this.props.type}
            date={this.props.date} />
        </div>
      </ul>
    )
  }
}
