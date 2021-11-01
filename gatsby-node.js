// https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // GraphQL 서버에서 꼭 가동해보세요. 감으로 하지 말구
  const result = await graphql(
    `
      {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                author
                date
                slug
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // versatile
  const posts = result.data.allMdx.edges

  // Create paginated page for blog posts
  const postPerPage = 3 // 한 페이지당 얼마나 보여줄거니
  const numPages = Math.ceil(posts.length / postPerPage) // 총 몇 페이지 나오니

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/1` : `/blog/${i + 1}`,
      component: path.resolve(`./src/templates/allPosts.js`),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create single blog post
  posts.forEach((edge, i) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id

    const prevId = i === 0 ? null : posts[i - 1].node.id
    const nextId = i === posts.length - 1 ? null : posts[i + 1].node.id

    createPage({
      path: `/${slug}`,
      component: path.resolve(`./src/templates/singlePost.js`),
      context: {
        id,
        prevId,
        nextId,
      },
    })
  })
}
