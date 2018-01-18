import React from "react"
import uuid from "uuid"
import "./form.css"

const categories = ["Choose one" , "Installing", "Platforms", "Database", "Collection", "BSON"]

export default class Form extends React.Component {

  constructor(props) {
    super(props)

    let threadNum = uuid()
    let gotType = ""
    let gotCategory = ""

    if (this.props.threadNo) {
      threadNum = this.props.threadNo
    }
    if (this.props.type) {
      gotType = this.props.type
    }
    if (this.props.category) {
      gotCategory = this.props.category
    }

    this.state = {
      id: "",
      threadNo: threadNum,
      type: gotType,
      category: gotCategory,
      title: "",
      text: "",
      date: new Date(),
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
      console.log(response)
      return response.json()
    })
    this.setState({
      title: "",
      text: "",
      sender: ""
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

        <div
          className="inputCategory"
          value={this.state.category}
          style={{ visibility: this.props.type === "newQuestion" ? "visible" : "hidden" }}>

          Category:
          <select className="selectCategory" name="category" onChange={this.handleInput} >
            {categories.map(item =>
              <option value={item}>{item}</option>)}
          </select>
        </div>

        <div>
          <input className="submit-btn" type="submit" value="Send" />
        </div>
      </form>
    )
  }
}
