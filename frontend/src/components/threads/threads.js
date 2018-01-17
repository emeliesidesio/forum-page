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
    fetch("http://localhost:8082/questions/original").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ forumThreads: json })
      console.log("Grejer från DB", this.state.forumThreads)
    })
  }

  render() {
    const kategori = this.props.filterVariable

    let forumThreadsToRender = this.state.forumThreads

    if (kategori) {
      forumThreadsToRender = forumThreadsToRender.filter(item =>
        item.category === this.props.filterVariable)
    }

    return (
      <div>

        {forumThreadsToRender.map(item =>
          <Thread
            formInput={this.props.formInput}
            type={this.props.type}
            date={this.props.date}
            item={item}
            // category={this.props.filterVariable}
          />)}

      </div>
    )
  }
}
