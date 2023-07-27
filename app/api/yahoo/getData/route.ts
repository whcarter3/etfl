import { cookies } from "next/headers"

export async function GET() {
  const url =
    "https://fantasysports.yahooapis.com/fantasy/v2/league/242.l.102163/"
  const cookieStore = cookies()
  const accessToken = cookieStore.get("yahooAccessToken")?.value

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    })

    return res
  } catch (error) {
    console.log(error)
  }
}
