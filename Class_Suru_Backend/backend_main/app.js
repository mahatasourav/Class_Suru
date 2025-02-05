import express from "express";
import authRoutes from "./routes/authRoutes.js";  
import cors from "cors";
import env from "dotenv";
env.config();





const app = express();

app.use(cors());

app.use(express.json());
  
app.get("/",(req,res)=>{
  res.send("Class_Suru_Backend")
})
app.use("/api/auth", authRoutes);  



const PORT = process.env.PORT|| 5000;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});