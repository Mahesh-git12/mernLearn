import express from "express";
const app=express();
import NotesRoutes from "./routes/NotesRoutes.js";
import { ConnectDB } from "./config/db.js";

import dotenv from "dotenv"; //to access Env varaibles
import { FetchNotes } from "./Controllers/notesController.js";
import mongoose, { mongo } from "mongoose";

dotenv.config();

// Connect mongoDB from db.js
ConnectDB();

const PORT=process.env.PORT ||5007; // access port from env

// middleware
app.use(express.json());

app.use((req,res,next) =>{
    console.log(`Req method is ${req.method} and Req url is ${req.url}`);
})
app.use("/api/notes",NotesRoutes);

//endpoint-> It is a combo of URl+ http methods that allows the user to interact with a specifc resource

app.listen(PORT, ()=>{
    console.log("Server is running on port 5007 yayyyyy");
});

