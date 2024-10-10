import { Router } from 'express'
import { pool } from '../config/database.js'

const router = Router()

// Get all events for a specific location
router.get('/location/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [id])
        res.json(result.rows)
    } catch (error) {
        console.error('Error fetching events:', error)
        res.status(500).send('Server Error')
    }
})

export default router

