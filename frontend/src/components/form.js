import React from "react"

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

  const formInput = [
    {inputName: "id", inputType: "text", inputPlaceHolder: "", inputValue: {this.state.id}},
    {inputName: "type", inputType: "text", inputPlaceHolder: "", inputValue: {this.state.type}},
    {inputName: "text", inputType: "text", inputPlaceHolder: "Write your question here:", inputValue: {this.state.text}}
  ]

  handleInput = event => {
    let input = {}
    input[event.target.name] = event.target.value
    setState(input)
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
          return
          <div>
            <input type={item.inputType} placeholder={item.inputName} value={item.inputValue} onChange={this.handleInput} />
          </div>
        })}
        <div>
          <input className="submit-btn" type="submit" value="Save" />
        </div>
      </form>
    )
  }
}
