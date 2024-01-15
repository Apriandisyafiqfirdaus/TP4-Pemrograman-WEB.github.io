const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Create a MySQL pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "developer",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Example route to fetch data from the database
app.get("/api/data", (req, res) => {
  pool.query("SELECT * FROM developer", (error, results, fields) => {
    if (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
