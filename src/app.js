import express from "express"
import morgan from "morgan"
import todoRoute from "./routes/todoRoute.js"

const app = express() 


app.use(express.json())
app.use(morgan("dev"))


app.use("/api/v1/tasks",todoRoute)


app.use("/",function(req,res){
    res.send("<h1>Ecomm App</h1>")
})

export default app