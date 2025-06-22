// seedAdmin.js
import bcrypt from 'bcryptjs';
import { sql } from './config/db.js'; // adjust path if needed
import dotenv from 'dotenv';

dotenv.config();

const seedAdmin = async () => {
  const email = 'yohanlabske@gmail.com';
  const plainPassword = 'mansouring1';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  try {
    // Delete any existing user with that email (optional)
    await sql`DELETE FROM adminusers WHERE email = ${email}`;

    // Insert new admin user
    await sql`
      INSERT INTO adminusers (email, password)
      VALUES (${email}, ${hashedPassword})
    `;
    console.log('✅ Admin user seeded successfully');
  } catch (err) {
    console.error('❌ Error seeding admin user:', err);
  }
};

seedAdmin();
