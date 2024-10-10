import { pool } from '../config/database.js'

// Function to get all events for a specific location
export const getEventsByLocation = async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [id])
        res.json(result.rows)
    } catch (error) {
        console.error('Error fetching events:', error)
        res.status(500).json({ error: 'Error fetching events' })
    }
}


