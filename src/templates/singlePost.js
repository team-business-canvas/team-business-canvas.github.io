import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { Layout } from '../components'

function singlePost(props) {
  const { data, pageContext } = props

  const featuredImage =
    data.mdx.frontmatter?.featuredImage.childImageSharp.fixed

  return (
    <Layout>
      singlepost
      {featuredImage && <Img fixed={featuredImage} />}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date
        excerpt
        slug
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
