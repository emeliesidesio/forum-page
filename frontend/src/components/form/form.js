import React from "react"
import "./form.css"

const formInput = [
  { inputName: "id", inputType: "text", inputPlaceHolder: "Question ID" },
  { inputName: "type", inputType: "text", inputPlaceHolder: "Question Type" },
  { inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:" },
  { inputName: "date", inputType: "text", inputPlaceHolder: "Date of submission:" },
  { inputName: "sender", inputType: "text", inputPlaceHolder: "Your name here:" },
  { inputName: "published", inputType: "radio", inputPlaceHolder: "Is this published?" },
  { inputName: "handled", inputType: "radio", inputPlaceHolder: "Has this been handled?" },
  { inputName: "image", inputType: "text", inputPlaceHolder: "Upload your picture" }
]

export default class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: "",
      type: "",
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
        {formInput.map(item => {
          return (
            <div>
              <input
                type={item.inputType}
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
