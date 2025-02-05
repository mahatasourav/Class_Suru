import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// Create a new PostgreSQL connection pool
const pool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error("Error acquiring client", err.stack);
    throw new Error("Database connection error");
  } else {
    console.log("Database connected successfully");
    release();
  }
});


const createUser = async (email, username, hashedPassword, phoneNumber) => {
  try {
    const result = await pool.query(
      "INSERT INTO public.users (username, email, password,phone_number) VALUES ($1, $2, $3) RETURNING id",
      [username, email, hashedPassword,phoneNumber] 
    );
    const display = await pool.query("SELECT * FROM users ORDER BY id ASC ");
    console.log('display',display);
    
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
