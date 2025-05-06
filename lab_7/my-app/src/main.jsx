import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import A from './pages/A.jsx'
import B from './pages/B.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="a" element={<A />} />
          <Route path="b" element={<B />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
