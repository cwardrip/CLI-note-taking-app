import { insert, getDB, savDB } from "./db";

export const newNote = async (note, tags) => {
    const newNote = {
        tags,
        content: note,
        id: Date.now()
    }

    await insert(newNote)
    return newNote
}

export const getAllNotes = async () => {
    const { notes } = await getDB()
    return notes
}