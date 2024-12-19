import app from "./src/app.js"
import mongoose from "mongoose"
import config from "./src/config/config.js"


(async () => {
    try{
        await mongoose.connect(config.MONGODB_URL)
        console.log("Successfully COnnected to MONGODB");
    }catch(error){
        console.log(`Error in DB Connection ${error}`);
    }
})()




const PORT = config.PORT
app.listen(PORT , () => {
    console.log(`app is running at Port:${PORT}`);  
})