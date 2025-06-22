import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectRoutes from './routes/connectRoutes.js'
import authRoutes from './routes/authRoutes.js'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes );
app.use('/api/connect', connectRoutes);
app.use('/api/contact', contactRoutes)

app.listen( process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
} );