"use server"

import { cookies } from "next/headers"

export async function yahooFantasyQuery(
  resource?: string,
  subresource?: string,
  filters?: string
) {
  const BASE_URL = "https://fantasysports.yahooapis.com/fantasy/v2/game/nfl"
  const accessToken = cookies().get("yahooAccessToken")?.value.toString()
  const refreshToken = cookies().get("yahooRefreshToken")

  let url = `${BASE_URL}/${resource}/${subresource}`
  if (filters) {
    url += `?${filters}`
  }

  try {
    const res = await fetch(
      "https://fantasysports.yahooapis.com/fantasy/v2/league/242.l.102163/",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    )
    console.log("data", res)
    return typeof res
  } catch (error) {
    console.log(error)
    return "error getting data"
  }
}
