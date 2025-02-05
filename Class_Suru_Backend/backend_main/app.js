import express from "express";
<<<<<<< HEAD
import authRoutes from "./routes/authRoutes.js"; 

=======
import authRoutes from "./routes/authRoutes.js";  
import cors from "cors";
>>>>>>> ed26528597348076325b585058f9713a2d4e6373
import env from "dotenv";
env.config();





const app = express();

<<<<<<< HEAD

=======
app.use(cors());
>>>>>>> ed26528597348076325b585058f9713a2d4e6373

app.use(express.json());
  
app.get("/",(req,res)=>{
  res.send("Class_Suru_Backend")
})
app.use("/api/auth", authRoutes);  



const PORT = process.env.PORT|| 5000;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
