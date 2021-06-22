import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query fetchData {
    site {
      info: siteMetadata {
        #info is alias name for siteMetadata
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title, author },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>{data.site.info.person.name}</h2>
      <div>
        {data.site.info.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name} : {item.age}
            </p>
          )
        })}
      </div> */}

      <h2>site title is : {title} </h2>
      <h5>author is : {author}</h5>
    </div>
  )
}

export default FetchData
