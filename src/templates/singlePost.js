import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { Divider, SEO } from '../components'
import styled from 'styled-components'
import '../../style/normalize.css'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

function SinglePost(props) {
  const { data, pageContext } = props

  const title = data.mdx.frontmatter?.title
  const excerpt = data.mdx.frontmatter?.excerpt
  const date = data.mdx.frontmatter?.date
  const author = data.mdx.frontmatter?.author
  const featuredImage =
    data.mdx.frontmatter?.featuredImage?.childImageSharp.fixed

  return (
    <>
      <SEO title={title} description={excerpt} />
      <PostTitle itemprop='headline' {...useScrollFadeIn('up', 0.75, 0)}>
        {title}
      </PostTitle>
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
  background-color: var(--adaptiveGray50);

  padding: 0 ${props => props.theme.paddings.xxxxxl};
  padding-bottom: 64px;
  ${props => props.theme.deviceSizes.desktop} {
    padding: 0 ${props => props.theme.paddings.global};
    padding-bottom: 64px;
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

export default SinglePost
