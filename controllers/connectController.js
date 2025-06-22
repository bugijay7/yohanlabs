import { sql } from '../config/db.js'; // adjust path if needed

// Get all connections (protected)
export const getAllConnections = async (req, res) => {
  try {
    const connections = await sql`SELECT * FROM connections ORDER BY created_at DESC`;
    res.status(200).json(connections);
  } catch (err) {
    console.error('Error fetching connections:', err);
    res.status(500).json({ error: 'Server error fetching connections' });
  }
};

// Get a single connection by ID (protected)
export const getConnectionsById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sql`SELECT * FROM connections WHERE id = ${id}`;
    if (result.length === 0) {
      return res.status(404).json({ error: 'Connection not found' });
    }
    res.status(200).json(result[0]);
  } catch (err) {
    console.error('Error fetching connection by ID:', err);
    res.status(500).json({ error: 'Server error fetching connection' });
  }
};

// Create a new connection (public)
export const createConnection = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await sql`
      INSERT INTO connections (name, email, message)
      VALUES (${name}, ${email}, ${message})
      RETURNING *;
    `;
    res.status(201).json({ message: 'Message sent successfully', data: result[0] });
  } catch (err) {
    console.error('Error creating connection:', err);
    res.status(500).json({ error: 'Server error saving message' });
  }
};

// Update a connection (protected)
export const updateConnection = async (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;

  try {
    const existing = await sql`SELECT * FROM connections WHERE id = ${id}`;
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Connection not found' });
    }

    const result = await sql`
      UPDATE connections
      SET name = ${name}, email = ${email}, message = ${message}
      WHERE id = ${id}
      RETURNING *;
    `;
    res.status(200).json({ message: 'Connection updated', data: result[0] });
  } catch (err) {
    console.error('Error updating connection:', err);
    res.status(500).json({ error: 'Server error updating connection' });
  }
};

// Delete a connection (protected)
export const deleteConnection = async (req, res) => {
  const { id } = req.params;
  try {
    const existing = await sql`SELECT * FROM connections WHERE id = ${id}`;
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Connection not found' });
    }

    await sql`DELETE FROM connections WHERE id = ${id}`;
    res.status(200).json({ message: 'Connection deleted' });
  } catch (err) {
    console.error('Error deleting connection:', err);
    res.status(500).json({ error: 'Server error deleting connection' });
  }
};
