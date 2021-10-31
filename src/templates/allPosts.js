import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

function allPosts(props) {
  console.log(props)

  const { data, pageContext } = props
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  const posts = data?.allMdx.edges

  console.log('all posts data', data)
  console.log(pageContext)

  return (
    <Layout>
      <h1>all posts</h1>
      {posts.map(({ node: { id, frontmatter } }) => {
        return (
          <div key={id}>
            <div>{id}</div>
            <div>{frontmatter.title}</div>
            <div>{frontmatter.date}</div>
          </div>
        )
      })}
    </Layout>
  )
}

export const allPostQuery = graphql`
  query AllPostQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`

export default allPosts
