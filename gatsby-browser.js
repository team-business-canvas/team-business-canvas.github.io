/* eslint-disable */
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './theme/theme'

import './style/reset.css'
import { preToCodeBlock } from 'mdx-utils'
import './style/language-tabs.css'
import { Code, Layout } from './src/components'
import { MDXProvider } from '@mdx-js/react'
require('prismjs/themes/prism-okaidia.css')

const GlobalStyles = createGlobalStyle`
    :root {
        --red: ${props => props.theme.lightColor.red};
        --orange: ${props => props.theme.lightColor.orange};
        --yellow: ${props => props.theme.lightColor.yellow};
        --green: ${props => props.theme.lightColor.green};
        --teal: ${props => props.theme.lightColor.teal};
        --blue: ${props => props.theme.lightColor.blue};
        --indigo: ${props => props.theme.lightColor.indigo};
        --purple: ${props => props.theme.lightColor.purple};
        --pink: ${props => props.theme.lightColor.pink};
        --cyan: ${props => props.theme.lightColor.cyan};
        --primary: ${props => props.theme.lightColor.primary};
        --secondary: ${props => props.theme.lightColor.secondary};
        --success: ${props => props.theme.lightColor.success};
        --info: ${props => props.theme.lightColor.info};
        --warning: ${props => props.theme.lightColor.warning};
        --danger: ${props => props.theme.lightColor.danger};
        /* adaptive gray lightmode */
        --adaptiveGray50: #f9fafb;
        --adaptiveGray100: #f2f4f6;
        --adaptiveGray200: #e5e8eb;
        --adaptiveGray300: #d1d6db;
        --adaptiveGray400: #b0b8c1;
        --adaptiveGray500: #8b95a1;
        --adaptiveGray600: #6b7684;
        --adaptiveGray700: #4e5968;
        --adaptiveGray800: #333d4b;
        --adaptiveGray900: #191f28;


        /* theme root style inject */
        --color-gs-1: #121211;
        --color-gs-2: #1d1d1b;
        --color-gs-3: #292929;
        --color-gs-4: #333;
        --color-gs-5: #555;
        --color-gs-6: #808080;
        --color-gs-7: #999;
        --color-gs-8: #c4c4c4;
        --color-gs-9: #d9d9d9;
        --color-gs-10: #f2f2f2;
        --color-gs-11: #f7f7f7;
        --color-gs-12: #fff;
        --color-black: var(--color-gs-1);
        --color-white: var(--color-gs-12);
        --color-hover-dark: rgba(255, 255, 255, 0.16);
        --color-hover-dark-2: rgba(255, 255, 255, 0.08);
        --color-hover-light-2: rgba(18, 18, 17, 0.04);

        --color-active-dark-theme: #38a5e1;
        --color-active-light-theme: #009dff;
        --color-success-dark-theme: #5ccc70;
        --color-success-light-theme: #41ba57;
        --color-warning-dark-theme: #fab23e;
        --color-warning-light-theme: #f29500;
        --color-error-dark-theme: #ed5f61;
        --color-error-light-theme: #d24a4d;
        --color-etc-dark-theme: #656de7;
        --color-etc-light-theme: #4954f2;
        --color-format-pdf: #be3751;
        --color-format-doc: #3174c4;
        --color-format-ppt: #ebad00;
        --color-format-excel: #41a451;
        --color-format-img: #6c7ac3;
        --color-format-hwp: #209ddf;
        --color-positive-dark-theme: var(--color-success-dark-theme);
        --color-positive-light-theme: var(--color-success-light-theme);
        --color-negative-dark-theme: var(--color-error-dark-theme);
        --color-negative-light-theme: var(--color-error-light-theme);

        --maxWidth-none: "none";
        --maxWidth-xs: 20rem;
        --maxWidth-sm: 24rem;
        --maxWidth-md: 28rem;
        --maxWidth-lg: 32rem;
        --maxWidth-xl: 36rem;
        --maxWidth-2xl: 42rem;
        --maxWidth-3xl: 48rem;
        --maxWidth-4xl: 56rem;
        --maxWidth-full: "100%";
        --maxWidth-wrapper: var(--maxWidth-4xl);
        --spacing-px: "1px";
        --spacing-0: 0;
        --spacing-1: 0.25rem;
        --spacing-2: 0.5rem;
        --spacing-3: 0.75rem;
        --spacing-4: 1rem;
        --spacing-5: 1.25rem;
        --spacing-6: 1.5rem;
        --spacing-8: 2rem;
        --spacing-10: 2.5rem;
        --spacing-12: 3rem;
        --spacing-16: 4rem;
        --spacing-20: 5rem;
        --spacing-24: 6rem;
        --spacing-32: 8rem;
        --fontFamily: "Spoqa Han Sans Neo", "sans-serif";
        --font-body: var(--fontFamily);
        --font-heading: var(--fontFamily);
        --fontWeight-normal: 400;
        --fontWeight-medium: 500;
        --fontWeight-semibold: 600;
        --fontWeight-bold: 700;
        --fontWeight-extrabold: 800;
        --fontWeight-black: 900;
        --fontSize-root: 16px;
        --lineHeight-none: 1;
        --lineHeight-tight: 1.1;
        --lineHeight-normal: 1.5;
        --lineHeight-relaxed: 1.625;
        /* 1.200 Minor Third Type Scale */
        --fontSize-0: 0.833rem;
        --fontSize-1: 1rem;
        --fontSize-2: 1.2rem;
        --fontSize-3: 1.44rem;
        --fontSize-4: 1.728rem;
        --fontSize-5: 2.074rem;
        --fontSize-6: 2.488rem;
        --fontSize-7: 2.986rem;
        --color-primary: #005b99;
        --color-text: #2e353f;
        --color-text-light: #4f5969;
        --color-heading: #1a202c;
        --color-heading-black: black;
        --color-accent: #d1dce5;
    }

     /* 다크 모드일 때 body에 삽일할 것. */
     .dark-mode {
        --red: ${props => props.theme.darkColor.red};
        --orange: ${props => props.theme.darkColor.orange};
        --yellow: ${props => props.theme.darkColor.yellow};
        --green: ${props => props.theme.darkColor.green};
        --teal: ${props => props.theme.darkColor.teal};
        --blue: ${props => props.theme.darkColor.blue};
        --indigo: ${props => props.theme.darkColor.indigo};
        --purple: ${props => props.theme.darkColor.purple};
        --pink: ${props => props.theme.darkColor.pink};
        --cyan: ${props => props.theme.darkColor.cyan};
        --primary: ${props => props.theme.darkColor.primary};
        --secondary: ${props => props.theme.darkColor.secondary};
        --success: ${props => props.theme.darkColor.success};
        --info: ${props => props.theme.darkColor.info};
        --warning: ${props => props.theme.darkColor.warning};
        --danger: ${props => props.theme.darkColor.danger};
        --adaptiveGray50: #202027;
        --adaptiveGray100: #2c2c35;
        --adaptiveGray200: #3c3c47;
        --adaptiveGray300: #4d4d59;
        --adaptiveGray400: #62626d;
        --adaptiveGray500: #7e7e87;
        --adaptiveGray600: #9e9ea4;
        --adaptiveGray700: #c3c3c6;
        --adaptiveGray800: #e4e4e5;
        --adaptiveGray900: #ffffff;
    }

    html,
    body {
        background-color: var(--adaptiveGray50);
        font-family: ${props => props.theme.fonts.main};
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        -webkit-font-smoothing: antialiased;
        color: var(---adaptiveGray900);

    }
      
    * {
        box-sizing: border-box;
    }
`

const mdxComponents = {
  h1: props => <h1 {...props} />,
  pre: props => console.log(props.children.props) || <pre {...props} />,
  wrapper: ({ children }) => <>{children}</>,
}

// pre: props => {
//   console.log(props)

//   const processedProps = preToCodeBlock(props)

//   if (props) {
//     return <Code {...processedProps} />
//   } else {
//     return <pre {...props} />
//   }
// },

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout>{element}</Layout>
      </ThemeProvider>
    </MDXProvider>
  )
}
