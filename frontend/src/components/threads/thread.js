import React from "react"

export default class Thread extends React.Component {

  render() {
    return (
      <div>
        {this.props.item.text}
      </div>
    )
  }
}
