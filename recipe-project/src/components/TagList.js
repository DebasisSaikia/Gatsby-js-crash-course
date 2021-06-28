import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import setupTags from "../utils/setupTags"

const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tag/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
