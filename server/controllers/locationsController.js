import { pool } from '../config/database.js'

// Function to get all locations
export const getAllLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations')
        res.json(result.rows)
    } catch (error) {
        console.error('Error fetching locations:', error)
        res.status(500).json({ error: 'Error fetching locations' })
    }
}


