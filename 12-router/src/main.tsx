import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import DetailsPage from './pages/details'

function MasterPage () {
  return (
    <Router>
      <header>
        <h2>Workshop APP</h2>

        <div>
          <span><Link to="/">Home</Link></span>{' | '}
          <span><Link to="/about">About us</Link></span>
        </div>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about">
            <Route index element={<AboutPage />} />
            <Route path=":name" element={<DetailsPage />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h2>Oops, that page does not exist</h2>
              </div>
            }
          />
        </Routes>
      </section>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <MasterPage />
  </React.StrictMode>
)
