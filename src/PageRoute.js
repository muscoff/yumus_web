import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const HomePage = React.lazy(()=> import('./components/HomePage'))

export default function PageRoute() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  )
}
