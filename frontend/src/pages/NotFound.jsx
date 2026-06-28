import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Go Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound

