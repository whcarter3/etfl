import { redirect } from "next/navigation"
import { NextRequest } from "next/server"
import { cookies } from "next/headers"

export async function GET(req: NextRequest) {
  const searchParams = new URLSearchParams(req.nextUrl.search)
  const code = searchParams.get("code")!.toString()
  const body = `grant_type=authorization_code&redirect_uri=oob&code=${code}`

  const auth = await fetch("https://api.login.yahoo.com/oauth2/get_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        `${process.env.YAHOO_CLIENT_ID}:${process.env.YAHOO_CLIENT_SECRET}`
      )}`,
    },
    body: body,
  })

  const authJson = await auth.json()
  const accessToken = authJson.access_token
  const refreshToken = authJson.refresh_token

  cookies().set({
    name: "yahooAccessToken",
    value: accessToken,
    httpOnly: false,
    path: "/",
  })

  cookies().set({
    name: "yahooRefreshToken",
    value: refreshToken,
    httpOnly: false,
    path: "/",
  })

  redirect("/dashboard")
}
