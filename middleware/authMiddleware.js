import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Check if Authorization header is present
  if (!authHeader) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  // Split "Bearer <token>"
  const parts = authHeader.split(' ');

  // Validate header format
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(400).json({ message: 'Malformed token format' });
  }

  const token = parts[1];

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('JWT Error:', err.message);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded; // Save decoded token payload (e.g., user ID)
    next();
  });
};
