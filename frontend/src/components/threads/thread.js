import React from "react"
import "./thread.css"

export default class Thread extends React.Component {

  render() {
    return (
      <ul className="accordion-list">
        <li>{this.props.item.text}</li>
      </ul>
    )
  }
}
