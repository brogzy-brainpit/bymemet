"use client"
import { useState } from "react"

export default function SendEmail({ newContent,name }) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleSend = async () => {
    if (!email) return alert("Enter email")

    setLoading(true)
    setStatus("Generating...")

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newContent }),
      })

      const data = await res.json()
   console.log('here it is')
   console.log(data.html)
      const sendRes = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          html: data.html,
          name: name,
        }),
      })

      const sendData = await sendRes.json()

      if (sendData.success) {
        setStatus("✅ Sent")
      } else {
        setStatus("❌ Failed")
      }
    } catch (err) {
      setStatus("❌ Error")
    }

    setLoading(false)
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.7)] gap-2 p-2">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="w-full p-2 text-black text-sm"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-white text-black px-3 py-1 text-sm"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      <p className="text-white text-xs">{status}</p>
    </div>
  )
}