import React from 'react'
import { graphql } from 'gatsby'
import {
  AllPostTitle,
  Divider,
  PostFeed,
  PostFeedWrapper,
  Pagination,
} from '../components'

function allPosts(props) {
  const { data, pageContext } = props
  const { currentPage, numPages } = pageContext

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  const posts = data?.allMdx.edges

  // const totalCount = data?.allMdx.totalCount // 전체 몇 개야?
  // const postPerPage = limit // 한 페이지에 몇 개씩 보여줘?
  // const numPages = Math.ceil(totalCount / postPerPage) // 총 몇 페이지 나오니?

  console.log(numPages)

  return (
    <>
      <AllPostTitle title='Typed 기술 블로그' />
      <Divider />
      <PostFeedWrapper>
        {posts.map(({ node: { id, frontmatter } }) => {
          return <PostFeed key={id} frontmatter={frontmatter} />
        })}
      </PostFeedWrapper>
      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        numPages={numPages}
        currentPage={currentPage}
      />
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
      totalCount
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
