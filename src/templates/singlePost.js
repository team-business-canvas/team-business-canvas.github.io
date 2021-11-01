import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { Divider } from '../components'
import styled from 'styled-components'
import '../../style/normalize.css'

function singlePost(props) {
  const { data, pageContext } = props

  const title = data.mdx.frontmatter?.title
  const date = data.mdx.frontmatter?.date
  const author = data.mdx.frontmatter?.author
  const featuredImage =
    data.mdx.frontmatter?.featuredImage?.childImageSharp.fixed

  return (
    <>
      <PostTitle itemprop='headline'>{title}</PostTitle>
      <PostInfo>
        {date} / {author}
      </PostInfo>
      <Divider />
      <MDXRendererWrapper>
        <MDXRenderer className='markdown-body'>{data.mdx.body}</MDXRenderer>
      </MDXRendererWrapper>
    </>
  )
}

const PostTitle = styled.h1`
  width: 100%;

  margin: 48px 0 24px 0;

  color: var(--adaptiveGray900);
  font-weight: 600;
  text-align: center;
`

const PostInfo = styled.h2`
  width: 100%;
  margin: 24px 0;
  color: var(--adaptiveGray500);
  text-align: center;
`

const MDXRendererWrapper = styled.div`
  // custom styles
  padding: 0 ${props => props.theme.paddings.xxxxxl};
  ${props => props.theme.deviceSizes.desktop} {
    padding: 0 ${props => props.theme.paddings.global};
  }

  color: var(--adaptiveGray900);
`

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        excerpt
        slug
        author
        featuredImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default singlePost
