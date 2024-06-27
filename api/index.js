import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
// ============================== routes
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import cookieParser from "cookie-parser"


dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mogoDB is connected")
}).catch((err)=>{
    console.log(err)
})


const app=express()

app.use(express.json())
app.use(cookieParser())



app.listen(3000,()=>{
    console.log("server is running on port 3000!")
})


app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)
app.use("/api/comment",commentRouter)


// =========================================Middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "internal error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})