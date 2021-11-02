import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = props => {
  // title, description, image, url, type, twitter, fb, google, schema
  const { title: metaTitle, description: metaDescription } = props

  const result = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            lang
            image
            author {
              name
              summary
            }
            social {
              facebook
              youtube
              typed
            }
          }
        }
      }
    `
  )

  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        description: defaultDescription,
        lang,
        image: defaultImage,
        author: defaultAuthor,
        social,
      },
    },
  } = result

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || 'ko',
      }}
      title={metaTitle || defaultTitle}
      titleTemplate={`${metaTitle || 'HOME'} | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription || defaultDescription,
        },
        {
          property: `og:title`,
          content: metaTitle || defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription || defaultDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: defaultImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription || defaultDescription,
        },
      ]}
    />
  )
}

export default SEO

// import React from 'react'
// import { Helmet } from 'react-helmet'
// import { useStaticQuery, StaticQuery, graphql } from 'gatsby'

// function SEO() {
//   return (
//     <StaticQuery
//       query={seoQuery}
//       //   htmlAttributes={{
//       //     lang,
//       //   }}
//       //   title={title}
//       //   titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
//       render={data => {
//         console.log(data)

//         return <Helmet />
//       }}
//     ></StaticQuery>
//   )
// }

// // description,
// // keywords,
// // lang = 'ko',
// // title,
// // image,
// // url,
// // author,

// const seoQuery = graphql`
//   query SeoQuery {
//     site {
//       siteMetadata {
//         social {
//           youtube
//           facebook
//           rocketpunch
//           typed
//         }
//       }
//     }
//   }
// `

// export default SEO
