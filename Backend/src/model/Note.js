import mongoose from "mongoose";


// 1) create a schema 
// 2) model based on that schema


//Schema for Notes
const NoteSchema=new mongoose.Schema(
    {
    title: {
        type: String,
        require:true,
    },

    content: {
        type:String,
        require:true,
    },
},{timestamps:true});

//model for notes schema

const Note=mongoose.model("Note",NoteSchema);

export default Note; // export Note model to use in other files


















