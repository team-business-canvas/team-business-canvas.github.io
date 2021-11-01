import * as React from 'react'
import {
  AllPostTitle,
  Divider,
  Pagination,
  PostFeed,
  PostFeedWrapper,
} from '../components'
import { graphql } from 'gatsby'

// TODO: allPost.js를 그대로 베껴야 한다!!
const IndexPage = props => {
  const { data } = props

  const posts = data?.allMdx.edges

  return (
    <>
      <AllPostTitle title='Typed 기술 블로그' />
      <Divider />

      <PostFeedWrapper>
        {posts.map(({ node: { id, frontmatter } }) => {
          return <PostFeed key={id} frontmatter={frontmatter} />
        })}
      </PostFeedWrapper>

      {/* numPages 즉, 총 몇 페이지인지는 개발하면서 수작업으로 확인해줘야 한다. */}
      <Pagination
        isFirstPage={true}
        isLastPage={false}
        numPages={2}
        currentPage={1}
        isIndexPage={true}
      />
    </>
  )
}

// TODO: page에 속한 컴포넌트들은 createPage를 통해 context를 전달받지 못하기 때문에 직접 인자를 넣어줘야 함
// 첫 페이지이므로 skip은 0, limit은 gatsby-node.js에 정의된 postPerPage 만큼
export const allPostQuery = graphql`
  query allPostQuery($skip: Int! = 0, $limit: Int! = 3) {
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
                fixed(width: 500) {
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

export default IndexPage
