import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const createUser = async (email, username, hashedPassword) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id",
      [email, username, hashedPassword]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database error (createUser):", error);
    throw new Error("Database error");
  }
};

const findUserByUsername = async (username) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database error (findUserByUsername):", error);
    throw new Error("Database error");
  }
};

export { createUser, findUserByUsername };
