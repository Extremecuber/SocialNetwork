import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'
import { User, Heart, MessageCircle, Share2 } from 'lucide-react'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await api.get('/posts')
      setPosts(res.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setError('Failed to fetch posts. Please try again later.')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await api.post('/posts', { content: newPost })
      setNewPost('')
      fetchPosts()
    } catch (error) {
      console.error('Error creating post:', error)
      setError('Failed to create post. Please try again.')
    }
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            required
          ></textarea>
          <button
            type="submit"
            className={`mt-2 bg-blue-600 text-white px-4 py-2 rounded-md ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Posting...' : 'Post'}
          </button>
        </form>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {posts.map(post => (
        <div key={post._id} className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <User className="h-10 w-10 rounded-full bg-gray-200 p-1" />
            <div className="ml-3">
              <Link to={`/profile/${post.user._id}`} className="font-semibold text-gray-900 hover:underline">
                {post.user.username}
              </Link>
              <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <p className="text-gray-800 mb-4">{post.content}</p>
          <div className="flex items-center space-x-4 text-gray-500">
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <Heart className="h-5 w-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <MessageCircle className="h-5 w-5" />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}