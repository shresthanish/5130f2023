const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL database connection configuration
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: '2023-11-13-lab',
    password: '1290',
    port: 5432, // Change to your database port
});

app.use(express.json());

app.post('/submit_form', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, password]);
        console.log('User added to the database:', result.rows[0]);
        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        console.error('Error inserting user into the database:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

