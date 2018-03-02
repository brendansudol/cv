import React from 'react'

const extraCss = `
  * { box-sizing: border-box; }

  body {
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.5;
    margin: 0;
    color: #111;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-top: 1em;
    margin-bottom: .5em;
  }

  h1 { font-size: 2rem }
  h2 { font-size: 1.5rem }
  h3 { font-size: 1.25rem }
  h4 { font-size: 1rem }
  h5 { font-size: .875rem }
  h6 { font-size: .75rem }

  p, dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1em;
  }

  .container { max-width: 700px; }
  .lower { text-transform: lowercase; }
  .mb05 { margin-bottom: 0.25rem; }
`

const Head = ({ title }) => (
  <head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css"
      rel="stylesheet"
    />
    <style dangerouslySetInnerHTML={{ __html: extraCss.replace(/\s/g, '') }} />
  </head>
)

export default Head
