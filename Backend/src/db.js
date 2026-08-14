import pg from "pg";

const pool = new pg.Pool({
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
  host: process.env.db_host,
  port: process.env.db_port,
});

export default pool;