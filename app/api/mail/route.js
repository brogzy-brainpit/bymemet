// import { klaviyo } from "@/app/lib/klaviyo"
import { renderEmail } from "@/app/lib/renderEmail"

export async function POST(req) {
  try {
    const state = await req.json()
const links=state.newContent?.body.links
const preview= "the test email is here"
    // console.log(state)
    const html = await renderEmail(state,links,preview)
    console.log(html)
    return Response.json({ html })

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}