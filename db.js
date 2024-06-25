const express = require('express');
const { Pool } = require('pg');
const app = express();
const dotenv = require('dotenv'); // Load environment variables from .env file

// Load environment variables from .env file
dotenv.config();

// Create a PostgreSQL connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// Check if connected to PostgreSQL
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to PostgreSQL database');
    client.release(); // Release the client back to the pool
});
