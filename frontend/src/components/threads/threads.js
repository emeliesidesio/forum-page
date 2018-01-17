import React from "react"
import Thread from "components/threads/thread"

export default class Threads extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      forumThreads: []
    }
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
