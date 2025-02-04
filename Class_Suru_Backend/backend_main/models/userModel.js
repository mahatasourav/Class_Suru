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

const createUser = async (name, email, hashedPassword, phone_number) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, password, phone_number) VALUES ($1, $2, $3, $4) RETURNING id",
      [name, email, hashedPassword, phone_number]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database error (createUser):", error);
    throw new Error("Database error");
  }
};

const findUserByEmail = async (email) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database error (findUserByEmail):", error);
    throw new Error("Database error");
  }
};

export { createUser, findUserByEmail };
