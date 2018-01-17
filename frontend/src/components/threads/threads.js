import React from "react"
import Thread from "components/threads/thread"

export default class Threads extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      forumThreads: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8082/questions").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ forumThreads: json })
      console.log("Grejer från DB", this.state.forumThreads)
    })
  }

  render() {
    return (
      <div>
        {this.state.forumThreads.map(item => {
          return <Thread
            item={item} />
        })}
      </div>
    )
  }
}
