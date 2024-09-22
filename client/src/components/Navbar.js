import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Bell, MessageCircle, User } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">SocialNetwork</Link>
            </div>
          </div>
          {isLoggedIn && (
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button className="bg-blue-600 p-1 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                <button className="bg-blue-600 p-1 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                  <Bell className="h-6 w-6" aria-hidden="true" />
                </button>
                <button className="ml-3 bg-blue-600 p-1 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="ml-3 relative">
                  <div>
                    <button className="bg-blue-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <User className="h-8 w-8 rounded-full" />
                    </button>
                  </div>
                </div>
                <button onClick={handleLogout} className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:text-blue-900 hover:bg-blue-50">
                  Logout
                </button>
              </div>
            </div>
          )}
          {!isLoggedIn && (
            <div className="flex items-center">
              <Link to="/login" className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/register" className="ml-4 text-blue-600 hover:bg-blue-50 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}