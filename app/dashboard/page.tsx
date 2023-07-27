"use client"

import { cookies } from "next/headers"
import { useState } from "react"
import Link from "next/link"

export default function Dashboard() {
  const [data, setData] = useState("click get data")
  const handleClick = async () => {
    const res = await fetch("/api/yahoo/getData")
    return res
  }

  return (
    <>
      <h1>Dashboard Page</h1>
      <Link className="text-purple-500 block" href="/">
        Home
      </Link>
      <button
        className="px-3 py-2 bg-blue-400 rounded-md text-white"
        onClick={handleClick}
      >
        Get Data
      </button>
      <p>Data: {data}</p>
    </>
  )
}
