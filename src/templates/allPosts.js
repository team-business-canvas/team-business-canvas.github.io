import React from 'react'
import { graphql } from 'gatsby'
import { Divider, GridWrapper, Layout, PostFeed } from '../components'
import styled from 'styled-components'

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
      <AllPostTitle>Typed 기술 블로그</AllPostTitle>
      <Divider />

      <GridWrapper>
        {posts.map(({ node: { id, frontmatter } }) => {
          console.log(frontmatter)

          return <PostFeed key={id} frontmatter={frontmatter} />
        })}
      </GridWrapper>

      <div>some pagination</div>
    </Layout>
  )
}

const AllPostTitle = styled.h1`
  width: 100%;

  margin-top: 48px;

  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--adaptiveGray900);
`

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
