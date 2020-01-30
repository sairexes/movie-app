import * as React from 'react'
import Head from 'next/head'
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    background: #f3f7fe;
    max-width: 90%;
    margin: 0 auto;
    padding: 25px 0;
  }
`;

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
    <GlobalStyle/>
      {children}
  </div>
)

export default Layout
