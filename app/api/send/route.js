import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { to, html,name} = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: 'lancingmemet@gmail.com',
        // pass: 'czqxqmzbgofgywkx', // app password
         user:'dangabarin2020@gmail.com',
         pass:"yabccxpsciuoynqs"
      },
    })
    await transporter.sendMail({
      from: `"by memet" <dangabarin2020@gmail.com>`,
      to,
      subject: `Test Email (${name})`,
      html,
    })

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}