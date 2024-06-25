/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://joseph:Buddha14!@localhost/biztime"
});

client.connect()
  .then(() => {
    console.log("Connected to the database successfully.");

    // Perform a test query to ensure the connection works
    return client.query("SELECT NOW()");
  })
  .then((result) => {
    console.log("Current time from database:", result.rows[0]);
  })
  .catch((err) => {
    console.error("Connection error", err.stack);
  });

module.exports = client;
