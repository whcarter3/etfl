import { redirect } from "next/navigation"

export async function GET() {
  const yahooRequestAuth = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${process.env.YAHOO_CLIENT_ID}&redirect_uri=${process.env.YAHOO_REDIRECT_URI}&response_type=code&language=en-us`

  redirect(yahooRequestAuth)
}
