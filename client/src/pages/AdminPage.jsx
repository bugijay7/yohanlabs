import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPage() {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchConnections = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:3000/api/connect', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setConnections(res.data);
      } catch (err) {
        if (err.response?.status === 403 || err.response?.status === 401) {
          setError('Unauthorized. Please log in again.');
        } else {
          setError('Failed to load messages.');
        }
        console.error('Error fetching connections:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConnections();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      await axios.delete(`http://localhost:3000/api/connect/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setConnections((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete the message.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {loading ? (
        <p>Loading messages...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : connections.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {connections.map(({ id, name, email, message, created_at }) => (
            <li key={id} className="border border-gray-600 rounded p-4 bg-[#1a1a1a]">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <button
                  onClick={() => handleDelete(id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
              <p className="text-sm text-gray-400 mb-1">{email}</p>
              <p className="text-sm mb-2">{message}</p>
              <p className="text-xs text-gray-500">
                Sent on: {new Date(created_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminPage;
