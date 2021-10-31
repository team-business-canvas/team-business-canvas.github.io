module.exports = {
  siteMetadata: {
    title: `Typed 개발 블로그`,
    author: {
      name: `Typed`,
      summary: `Typed는 Data-driven하게 변해가는 Business Professional들의 비즈니스 문서 업무의 혁신을 불러일으킬 새로운 패러다임의 SaaS입니다`,
    },
    description: `Typed의 개발 블로그입니다`,
    siteUrl: `https://business-canvas.github.io/typed-blog/`,
    social: {
      facebook: `https://www.facebook.com/Typed.do`,
      youtube: 'https://www.youtube.com/channel/UC5TE3eZk_t-OUl-BY-VTK_w',
      rocketpunch: 'https://www.rocketpunch.com/companies/businesscanvas/jobs',
      typed: 'https://www.typed.biz/career',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/posts/',
      },
      __key: 'posts',
    },
  ],
}
