import React from "react"
// import { BrowserRouter, Route } from "react-router-dom"
import Users from "pages/users/users"
import Admin from "pages/admin/admin"

class App extends React.Component {

  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //     <Route exact path="/" component={Users} />
      //     <Route exact path="/admin" component={Admin} />
      //   </div>
      // </BrowserRouter>
    <Users />
    )
  }

}

export default App
