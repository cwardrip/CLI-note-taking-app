import fs from 'fs/promises'

const DB_PATH = new URL('../db.json', import.meta.url).pathname;

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8')
    console.log(db)
    return JSON.parse(db)
}

export const savDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}

export const insert = async (note) => {
    const db = await getDB()
    db.notes.push(note)
    await savDB(db)
    return note
}