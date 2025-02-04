import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail} from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";

const signup = async (req, res) => {
    const { name, email,  password, phone_number } = req.body;

    if (!name || !email || !password || !phone_number) {
        return res.status(400).json({ success: false, message: "All fields (name, email, password, phone_number) are required" });
    }

    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(name, email,  hashedPassword, phone_number);

        res.status(201).json({ success: true, message: "User registered successfully", userId: newUser.id });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields (email, password) are required" });
    }

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
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
