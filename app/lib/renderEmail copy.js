
// app/lib/emailRenderer.js

import "server-only"
// import { renderToStaticMarkup } from "react-dom/server"
import { Body, Container, Head, Html, Preview } from "@react-email/components"
import { Klaviyo } from "./Klaviyo";

export async function renderEmail(state,links,preview) {
  // console.log(state)
  const { render } = await import('@react-email/render');
  let initial= render(
    <Html
    // xmlns="http://www.w3.org/1999/xhtml"
    //           xmlns:v="urn:schemas-microsoft-com:vml"
    //           xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <Head>
      <meta charSet="utf-8" />
      <title>coded bymemet</title>
      </Head>
      {preview?<Preview>{preview}</Preview>:""}
      <Body>
        <Container>
          {Klaviyo(state)}
        </Container>
      </Body>
    </Html>,{pretty:true,}
  )
  return initial.replace(/&lt;/g,"<",).replace(/&gt;/g,`>`).replace(/&#x27;/g,`'`).replace(/&quot;/g,`"`).replace(/&amp;/g,`&`).replace(/bgcolor=""/g,``)
  .replace(/background=""/g,``).replace(/height=""/g,``).replace(/height:px;/g,``).replace(/height="0"/g,``).replace(/height:0px;/g,``).replace(/border-top-left-radius:0px;/g,``).replace(/border-top-right-radius:0px;/g,``).replace(/border-bottom-left-radius:0px;/g,``).replace(/border-bottom-right-radius:0px/g,``).replace(/border-bottom-right-radius:0px;/g,``).replace(/background:transparent;/g,``).
  replace(/background-color:transparent;/g,``).replace(/;;/g,`;`)

}