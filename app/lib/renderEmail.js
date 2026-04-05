// app/lib/emailRenderer.js

import "server-only"
import { Body, Container, Head, Html, Preview } from "@react-email/components"
import { Klaviyo } from "./Klaviyo";

export async function renderEmail(state, links, preview) {
  const { render } = await import('@react-email/render');

  const initial =await render(
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <title>coded bymemet</title>
      </Head>

      {preview ? <Preview>{preview}</Preview> : ""}

      <Body>
        <Container>
          {Klaviyo(state)}
        </Container>
      </Body>
    </Html>,
    { pretty: true }
  )

  // ✅ CLEAN + UNESCAPE (this is the missing piece)
  return initial
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, "&")
    .replace(/bgcolor=""/g, "")
    .replace(/background=""/g, "")
    .replace(/height=""/g, "")
    .replace(/height="0"/g, "")
    .replace(/height:0px;/g, "")
    .replace(/;;/g, ";")
}