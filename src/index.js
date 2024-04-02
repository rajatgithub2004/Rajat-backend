import dotenv from "dotenv"
dotenv.config({
  path : './env'
})

import connectDB from "./db/index.js";

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running on port : ${process.env.PORT}`)
  })
})

.catch((error)=>{
  console.log("MOngo db connection failed", error)
})
