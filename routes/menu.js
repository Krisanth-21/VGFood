import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM menu_items');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get menu items by category
router.get('/category/:category', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM menu_items WHERE category = ?', [req.params.category]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new menu item
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, image_url } = req.body;
    const [result] = await pool.query(
      'INSERT INTO menu_items (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)',
      [name, description, price, category, image_url]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
