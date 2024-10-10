import { pool } from './database.js';

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                date TIMESTAMP NOT NULL,
                location_id INTEGER
            );
            CREATE TABLE IF NOT EXISTS locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address TEXT
            );
        `);
        console.log('Tables created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
};

createTables().finally(() => pool.end());
