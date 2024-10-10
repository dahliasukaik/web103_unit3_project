import { Router } from 'express'
import { pool } from '../config/database.js'

const router = Router()

// Get all locations
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations')
        res.json(result.rows)
    } catch (error) {
        console.error('Error fetching locations:', error)
        res.status(500).send('Server Error')
    }
})

export default router


