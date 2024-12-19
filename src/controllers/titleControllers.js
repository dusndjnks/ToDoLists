import Title from "../models/titleSchema.js";

export const createToDo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        const existingTask = await Title.findOne({ title });
        if (existingTask) {
            return res.status(200).json({
                success: false,
                message: "Task already exists",
            });
        }
        const task = await Title.create({ 
            title, 
            description, 
            status: 'pending' 
        });

        res.status(201).json({
            success: true,
            message: "New task has been created successfully",
            task, 
        });
    } catch (error) {
        console.error(`Error in adding tasks: ${error}`);
        res.status(500).json({
            success: false,
            message: "Error in adding task",
            error
        });
    }
};


export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Task ID is required",
            });
        }

        const taskToDelete = await Title.findByIdAndDelete(id);

        if (!taskToDelete) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Successfully deleted the task",
            task: taskToDelete,
        });

    } catch (error) {
        console.error(`Error in deleting tasks: ${error}`);
        res.status(500).json({
            success: false,
            message: "Error in deleting task",
            error,
        });
    }
};


export const updateTasks = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { id } = req.params;
        if (!title && !description) {
            return res.status(400).json({
                success: false,
                message: "At least one field (title or description) is required for update",
            });
        }
        const updateData = {};
        if (title) updateData.title = title;
        if (description) updateData.description = description;
        const updatedTask = await Title.findByIdAndUpdate(
            id, 
            updateData, 
            { new: true, runValidators: true } 
        );
        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Successfully updated the task",
            task: updatedTask,
        });
    } catch (error) {
        console.error(`Error in updating tasks: ${error}`);
        res.status(500).json({
            success: false,
            message: "Error in updating task",
            error,
        });
    }
};

export const getAllTasks = async (req,res) => {
    try{
        const task = await Title.find({})
        res.status(200).json({
            success : true,
            message : "All Tasks are fetched successfuly",
            count  : task.length,
            task
        })
    }catch(error){
        console.log(`Error in getting single task ${error}`);
        res.status(500).json({
            success : false,
            message : "Error in getting single task",
            error
        })
    }
}




export const getSingleTasks = async (req,res) => {
    try{
        const task = await Title.findOne({slug : req.params.slug})
        res.status(200).json({
            success : true,
            message : "Current Task is fetched successfuly",
            count  : task.length,
            task
        })
    }catch(error){
        console.log(`Error in getting single task ${error}`);
        res.status(500).json({
            success : false,
            message : "Error in getting single task",
            error
        })
    }
}