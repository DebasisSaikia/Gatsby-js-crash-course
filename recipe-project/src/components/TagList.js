import React from "react"
import setupTags from "../utils/setupTags"

const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  console.log(newTags)
  return (
    <div>
      <h2>Tag lists</h2>
    </div>
  )
}

export default TagList
