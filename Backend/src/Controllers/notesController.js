import Note from "../model/Note.js"; //import Note model we created from Note.js 

//get
export async function FetchNotes(req,res){ 
    try {
        const notes=await Note.find().sort({ createdAt: -1})  //it finds all Note model we created and sort with newest first
        res.status(200).json(notes); 
    } catch (error) {
        console.error("Error in FetchNotes Controller");
        res.status(500).json({message:"Internal server Error"})
    }
}

//get specific id

export async function FetchNotesByID(req,res) {
    try {
        const notebyID=await Note.findById(req.params.id)   
        if(!notebyID){
            return res.status(404).json({message:"Note not found"})
        }

        res.status(200).json(notebyID)
    } catch (error) {
        console.error("Error in FetchByID",error)
        res.status(500).json({message:"internal server error"})
    }
}


//post
export async function CreateNotes(req,res) {
    try {
        const {title,content}=req.body
        const note=new Note({title,content})

        const SavedNote=await note.save()
        res.status(201).json(SavedNote)
    } catch (error) {
        console.error("Error in CreateNotes",error)
        res.status(500).json({message:"Internal server error"})
    }   
}



//update

export async function UpdateNotes(req,res) {
    try {
        const {title,content} =req.body
        const updateNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true,});

        if(!updateNote){
            return res.status(404).json({message:"Note not found"})
        }

        res.status(200).json(updateNote);
    } catch (error) {
        console.error("Error in notesController",error),
        res.status(500).json({message:"Internal server error"})
    }
}


//delete

export async function deleteNotes(req,res) {

    try {
        const {title,content}=req.body
        const deletenote=await Note.findByIdAndDelete(req.params.id)
        if(!deletenote){
            
            return res.status(404).json({message:"Not found"})
        }
        
        res.status(200).json({message:"Note deleted successfully"});
    } catch (error) {
        console.error("Error in deleetNotes",error),
        res.status(500).json({message:"Internal server error"});
    }
    
}


