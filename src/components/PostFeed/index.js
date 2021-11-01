import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import PostHover from '../../animations/PostHover'

function PostFeed({ frontmatter }) {
  const thumbnail = frontmatter.featuredImage?.childImageSharp?.fixed
  const fluidThumbnail = frontmatter.featuredImage?.childImageSharp?.fluid

  const onPostFeedClick = () => {}

  return (
    <PostFeedRoot to={`/${frontmatter.slug}`} itemProp='url'>
      <PostFeedWrapper onClick={onPostFeedClick}>
        {thumbnail && (
          <ThumbnailWrapper>
            {/* <Img className='thumbnail' fixed={thumbnail} /> */}
          </ThumbnailWrapper>
        )}
        <PostInfoWrapper>
          <div className='title'>{frontmatter.title}</div>
          <div className='excerpt'>{frontmatter.excerpt}</div>
          <div className='date'>
            {frontmatter.date} / {frontmatter.author}
          </div>
        </PostInfoWrapper>
      </PostFeedWrapper>
    </PostFeedRoot>
  )
}

const PostFeedRoot = styled(Link)`
  display: block;

  margin-bottom: 24px;
  border: 1px solid var(--adaptiveGray200);
  border-radius: 6px;
  padding: 20px;

  cursor: pointer;

  &:hover {
    animation: ${PostHover} 0.5s ease forwards;
  }
`

const PostFeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${props => props.theme.deviceSizes.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const ThumbnailWrapper = styled.div`
  flex: 1;

  width: 220px;
  height: 164px;

  .thumbnail {
    margin-bottom: 8px;
    border-radius: 6px;
  }

  ${props => props.theme.deviceSizes.desktop} {
    margin-right: 20px;

    .thumbnail {
      width: 100%;
      object-fit: cover;
    }
  }
`

const PostInfoWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  .title {
    margin-bottom: 18px;

    color: var(--adaptiveGray900);
    font-size: 24px;
    font-weight: bold;
  }

  .excerpt {
    margin-bottom: 24px;

    color: var(--adaptiveGray600);
    font-size: 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    line-height: 1.5;
  }

  .date {
    font-size: 14px;
    color: var(--adaptiveGray400);
  }
`

export default PostFeed
