import dotenv from "dotenv"
dotenv.config()

const config = {
    PORT : process.env.PORT || 4000,
    MONGODB_URL : process.env.MONGODB_URL || "mongodb+srv://affan:mhdaffan@cluster0.kfqzryh.mongodb.net/todolist"
}

export default config 