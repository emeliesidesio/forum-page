import React from "react"
// import { BrowserRouter, Route } from "react-router-dom"
import Users from "pages/users/users"
// import Admin from "pages/admin/admin"

class App extends React.Component {

  render() {
    return (
      // <BrowserRouter>
      <div>
        <Users />
      </div>
      // </BrowserRouter>
    )
  }

}

export default App
