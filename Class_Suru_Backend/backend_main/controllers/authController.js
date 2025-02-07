import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
const JWT_EXPIRATION = "1h"; // Token expiration time

// Function to generate a JWT token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
    );
};

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
    }
};

// Signup Route
const signup = async (req, res) => {
    try {
        const { username, email, password, phone_number } = req.body;

        if (!username || !email || !password || !phone_number) {
            return res.status(400).json({ 
                success: false, 
                message: "All fields (username, email, password, phone_number) are required" 
            });
        }

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: "Email already exists" 
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(email, username, hashedPassword, phone_number);

        const token = generateToken(newUser); // Generate JWT for new user

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            userId: newUser.id,
            token // Send JWT token in response
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Login Route
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: "All fields (email, password) are required" 
            });
        }

        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ 
                success: false, 
                message: "Invalid email or password" 
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ 
                success: false, 
                message: "Invalid email or password" 
            });
        }

        const token = generateToken(user); // Generate JWT for user

        res.status(200).json({ 
            success: true, 
            message: "Login successful", 
            token 
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Protected Route Example
const protectedRoute = (req, res) => {
    res.json({ success: true, message: "This is a protected route", user: req.user });
};

export { signup, login, verifyToken, protectedRoute };
