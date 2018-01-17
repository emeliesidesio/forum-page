import React from "react"
import "./form.css"

export default class Form extends React.Component {

  constructor(props) {
    super(props)
    let threadNum = ""
    if (this.props.threadNo) {
      threadNum = this.props.threadNo
    }
    this.state = {
      id: "",
      threadNo: threadNum,
      type: "",
      title: "",
      text: "",
      date: "",
      sender: "",
      published: "",
      handled: "",
      image: ""
    }
  }

  handleInput = event => {
    const input = {}
    input[event.target.name] = event.target.value
    this.setState(input)
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8082/questions", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      return response.json()
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        {this.props.formInput.map(item => {
          return (
            <div>
              <input
                type={item.inputType}
                title={item.inputType}
                name={item.inputName}
                placeholder={item.inputPlaceHolder}
                value={this.state[item.inputName]}
                onChange={this.handleInput} />
            </div>
          )
        })}
        <div>
          <input className="submit-btn" type="submit" value="Send" />
        </div>
      </form>
    )
  }
}
