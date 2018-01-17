import React from "react"
import "./category.css"

const categories = ["Installing", "Platforms", "Database", "Collection", "BSON"]

export default class Category extends React.Component {
  // Om man klickar på en kategori, då ska man filtrera på den här kategorin i newQuestions
  handleCategoryClick = event => {
    console.log("you clicked a category", event.target.value)
  }

  render() {
    return (
      <div className="category-box">
        <ul>
          {categories.map(item => {
            return (
              <button value={item} onClick={this.handleCategoryClick}>{item}</button>
            )})
          }
        </ul>
      </div>
    )
  }
}
