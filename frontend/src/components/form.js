import React from "react"

const formInput = [
  { inputName: "id", inputType: "text", inputPlaceHolder: "" },
  { inputName: "type", inputType: "text", inputPlaceHolder: "" },
  { inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:" },
  { inputName: "date", inputType: "text", inputPlaceHolder: "Date of submission" },
  { inputName: "sender", inputType: "text", inputPlaceHolder: "Your name here" },
  { inputName: "published", inputType: "boolean", inputPlaceHolder: "Is this published?" },
  { inputName: "handled", inputType: "boolean", inputPlaceHolder: "Has this been handled?" },
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
    let input = {}
    input[event.target.name] = event.target.value
    this.setState(input)
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8082", {
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
        <h1 className="title">Post a question</h1>
        {formInput.map(item => {
          return (
            <div>
              <input type={item.inputType} placeholder={item.inputName} value={this.state[item.inputName]} onChange={this.handleInput} />
            </div>
          )
        })}
        <div>
          <input className="submit-btn" type="submit" value="Save" />
        </div>
      </form>
    )
  }
}
