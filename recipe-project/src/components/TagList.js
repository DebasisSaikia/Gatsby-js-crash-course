import React from "react"
import setupTags from "../utils/setupTags"

const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div>
      <h2>Tag lists</h2>
    </div>
  )
}

export default TagList
