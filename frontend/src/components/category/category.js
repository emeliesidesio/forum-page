import React from "react"
import "./category.css"

export default class Category extends React.Component {
  render() {
    return (
      <div className="category-box">
        <ul>
          <li>Installing</li>
          <li>Platforms</li>
          <li>Database</li>
          <li>Collection</li>
          <li>BSON</li>
        </ul>
      </div>
    )
  }
}
