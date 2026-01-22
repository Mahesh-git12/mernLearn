import express from "express";
import { CreateNotes, deleteNotes, FetchNotes, UpdateNotes, FetchNotesByID } from "../Controllers/notesController.js";

const route=express.Router();


route.get("/",FetchNotes)
route.get("/:id",FetchNotesByID);
route.post("/",CreateNotes)
route.put("/:id",UpdateNotes)
route.delete("/:id",deleteNotes)

export default route;



