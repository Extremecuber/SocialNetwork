import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      try {
        const userResponse = await api.get(`/users/${id}`);
        setUser(userResponse.data);
        const postsResponse = await api.get(`/posts/user/${id}`);
        setPosts(postsResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserAndPosts();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">{user.username}</h1>
        <p className="text-gray-600 mb-4">{user.email}</p>
        <p className="text-gray-800">{user.bio || 'No bio available'}</p>
      </div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow rounded-lg p-6 mb-4">
          <p className="text-gray-800">{post.content}</p>
          <p className="text-gray-600 text-sm mt-2">
            Posted on: {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}