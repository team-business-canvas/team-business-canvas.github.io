import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { UnderLine } from '..'
import { FOOTER_WHITE_SPACE_HEIGHT } from '../../constants'

function Footer() {
  const socialData = useStaticQuery(graphql`
    query SnsQuery {
      site {
        siteMetadata {
          social {
            youtube
            facebook
            rocketpunch
            typed
          }
        }
      }
    }
  `)

  const social = socialData?.site?.siteMetadata?.social

  return (
    <FooterRoot>
      <SocialWrapper className='social-wrapper'>
        <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
          <StaticImage
            className='social social-youtube'
            layout='fixed'
            formats={['auto', 'webp', 'avif']}
            src='../../images/social/youtube.svg'
            width={45}
            height={45}
            quality={95}
            alt='social-youtube'
          />
        </a>
        <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
          <StaticImage
            className='social social-facebook'
            layout='fixed'
            formats={['auto', 'webp', 'avif']}
            src='../../images/social/facebook.svg'
            width={45}
            height={45}
            quality={95}
            alt='social-facebook'
          />
        </a>
        <a href={social.rocketpunch} target='_blank' rel='noopener noreferrer'>
          <StaticImage
            className='social social-rocketpunch'
            layout='fixed'
            formats={['auto', 'webp', 'avif']}
            src='../../images/social/rocketpunch.svg'
            width={45}
            height={45}
            quality={95}
            alt='social-rocketpunch'
          />
        </a>
        <a href={social.typed} target='_blank' rel='noopener noreferrer'>
          <StaticImage
            className='social social-typed'
            layout='fixed'
            formats={['auto', 'webp', 'avif']}
            src='../../images/social/typed.svg'
            width={45}
            height={45}
            quality={95}
            alt='social-typed'
          />
        </a>
      </SocialWrapper>
      <FooterText className='footer__text'>
        <div>© Business Canvas. All rights reserved.</div>
        <small>
          Blog made by
          <a href='https://github.com/DarrenKwonDev'>
            <UnderLine text='Darren' />
          </a>
        </small>
      </FooterText>
    </FooterRoot>
  )
}

const FooterRoot = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* margin-top: ${FOOTER_WHITE_SPACE_HEIGHT}px; */
  border-top: 1px solid var(--adaptiveGray200);
  padding-bottom: ${FOOTER_WHITE_SPACE_HEIGHT}px;
  background-color: var(--adaptiveGray50);
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 36px;
  padding-top: 48px;

  a {
    cursor: pointer;
    margin-right: 18px;
  }

  a:nth-last-child(1) {
    margin-right: 0;
  }
`

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--adaptiveGray900);
  line-height: 1.5;
`

export default Footer
