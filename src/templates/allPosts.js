import React from 'react'
import { graphql } from 'gatsby'
import { AllPostTitle, Divider, PostFeed, PostFeedWrapper } from '../components'

function allPosts(props) {
  const { data, pageContext } = props
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  const posts = data?.allMdx.edges

  return (
    <>
      <AllPostTitle title='Type 기술 블로그' />
      <Divider />

      <PostFeedWrapper>
        {posts.map(({ node: { id, frontmatter } }) => {
          return <PostFeed key={id} frontmatter={frontmatter} />
        })}
      </PostFeedWrapper>
    </>
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
            author
            featuredImage {
              childImageSharp {
                fixed(width: 220, height: 164) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default allPosts
