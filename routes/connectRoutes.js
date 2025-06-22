import express from 'express';
import {
  getAllConnections,
  getConnectionsById,
  createConnection,
  updateConnection,
  deleteConnection
} from '../controllers/connectController.js';

import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   GET /connect
// @desc    Get all connections (protected)
router.get('/', authenticateToken, getAllConnections);

// @route   GET /connect/:id
// @desc    Get a single connection by ID (protected)
router.get('/:id', authenticateToken, getConnectionsById);

// @route   POST /connect
// @desc    Create a new connection (public)
router.post('/', createConnection);

// @route   PUT /connect/:id
// @desc    Update a connection by ID (protected)
router.put('/:id', authenticateToken, updateConnection);

// @route   DELETE /connect/:id
// @desc    Delete a connection by ID (protected)
router.delete('/:id', authenticateToken, deleteConnection);

export default router;
 