import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByUsername } from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";

const signup = async (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ success: false, message: "All fields (email, username, password) are required" });
    }

    try {
        const existingUser = await findUserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(email, username, hashedPassword);

        res.status(201).json({ success: true, message: "User registered successfully", userId: newUser.id });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "All fields (username, password) are required" });
    }

    try {
        const user = await findUserByUsername(username);
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid username or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid username or password" });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { signup, login };
