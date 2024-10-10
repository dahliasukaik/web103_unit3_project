import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const config = {
    connectionString: process.env.DATABASE_PUBLIC_URL,
    ssl: {
        rejectUnauthorized: false // You may need this for connecting to hosted databases securely.
    }
}
export const pool = new pg.Pool(config)
