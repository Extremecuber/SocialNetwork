import React from 'react'
import { Link } from 'react-router-dom'
import { Home, User, Bell, MessageCircle } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <nav className="mt-5 px-2">
        <Link to="/" className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
          <Home className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
          Home
        </Link>
        <Link to="/profile" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
          <User className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
          Profile
        </Link>
        <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
          <Bell className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
          Notifications
        </a>
        <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
          <MessageCircle className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
          Messages
        </a>
      </nav>
    </aside>
  )
}