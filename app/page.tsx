import Link from "next/link"

export default function Home() {
  return (
    <main className="p-16">
      <h1>Hello world</h1>
      <Link className="text-purple-500" href="/api/yahoo">
        Authenticate
      </Link>
    </main>
  )
}
