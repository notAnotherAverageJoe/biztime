const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');

// Initialize the express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Determine the database connection string based on the environment
let DB_URI;
if (process.env.NODE_ENV === "test") {
  DB_URI = process.env.TEST_DB_URI;
} else {
  DB_URI = process.env.DB_URI;
}

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

module.exports = pool;
