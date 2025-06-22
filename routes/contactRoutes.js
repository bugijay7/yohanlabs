import express from 'express';
import { getAllContacts, getContactsById, createContact, updateContact, deleteContact } from '../controllers/contactController.js'
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();


router.get('/', authenticateToken, getAllContacts);


router.get('/:id', authenticateToken, getContactsById);


router.post('/', createContact);


router.put('/:id', authenticateToken, updateContact);


router.delete('/:id', authenticateToken, deleteContact);

export default router;
 
