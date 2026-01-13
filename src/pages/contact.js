import * as React from "react"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <main>
      <title>Contact Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/about">
        About Page
      </Link>
    </main>
  )
}

export const Head = () => <title>Contact Page</title>

export default Contact

