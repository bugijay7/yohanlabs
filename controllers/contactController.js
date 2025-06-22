import { sql } from '../config/db.js';

// 🔒 Get all contacts (Admin only)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await sql`SELECT * FROM contacts ORDER BY created_at DESC`;
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ error: 'Server error fetching contacts' });
  }
};

// 🔒 Get a contact by ID
export const getContactsById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sql`SELECT * FROM contacts WHERE id = ${id}`;
    if (result.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(result[0]);
  } catch (err) {
    console.error('Error fetching contact by ID:', err);
    res.status(500).json({ error: 'Server error fetching contact' });
  }
};

// 🌐 Public: Create contact (via contact form)
export const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await sql`
      INSERT INTO contacts (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
      RETURNING *;
    `;
    res.status(201).json({ message: 'Message sent successfully', data: result[0] });
  } catch (err) {
    console.error('Error creating contact:', err);
    res.status(500).json({ error: 'Server error saving message' });
  }
};

// 🔒 Update contact (Admin only)
export const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, subject, message } = req.body;

  try {
    const existing = await sql`SELECT * FROM contacts WHERE id = ${id}`;
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    const result = await sql`
      UPDATE contacts
      SET name = ${name}, email = ${email}, subject = ${subject}, message = ${message}
      WHERE id = ${id}
      RETURNING *;
    `;
    res.status(200).json({ message: 'Contact updated', data: result[0] });
  } catch (err) {
    console.error('Error updating contact:', err);
    res.status(500).json({ error: 'Server error updating contact' });
  }
};

// 🔒 Delete contact (Admin only)
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const existing = await sql`SELECT * FROM contacts WHERE id = ${id}`;
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    await sql`DELETE FROM contacts WHERE id = ${id}`;
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({ error: 'Server error deleting contact' });
  }
};
