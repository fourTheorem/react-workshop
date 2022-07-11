import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage () {
  return (
    <div>
      <h3>This page is supposed to talk a bit about us 🙈</h3>

      <ul>
        <li><Link to="luciano">Luciano</Link></li>
        <li><Link to="guilherme">Guilherme</Link></li>
      </ul>
    </div>
  )
}
