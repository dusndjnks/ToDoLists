import express from "express"
import { createToDo, deleteTask, getAllTasks, getSingleTasks, updateTasks } from "../controllers/titleControllers.js"


const router = express.Router()

router.post("/create-tasks" , createToDo)
router.delete("/delete-tasks/:id" , deleteTask)
router.put("/update-tasks/:id" , updateTasks)
router.get("/get-alltasks" , getAllTasks)
router.get("/get-singletasks/:id" , getSingleTasks)


export default router