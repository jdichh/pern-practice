const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "Scrublord21",
  host: "localhost",
  port: 5432,
  database: "todopern",
});

module.exports = pool;
