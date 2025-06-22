import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { sql } from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await sql`SELECT * FROM adminusers WHERE email = ${email}`;
    const user = users[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
};
