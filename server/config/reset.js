import { pool } from './database.js'

const createTables = async () => {
    try {
        // Create locations table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255),
                city VARCHAR(100),
                state VARCHAR(50),
                zip VARCHAR(10),
                image VARCHAR(255)
            );
        `)

        // Create events table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                time TIME NOT NULL,
                location_id INTEGER REFERENCES locations(id),
                image VARCHAR(255),
                description TEXT
            );
        `)

        console.log('Tables created successfully')
    } catch (error) {
        console.error('Error creating tables:', error)
    } finally {
        pool.end()
    }
}

createTables()

