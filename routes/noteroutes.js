const router = require('express').Router();
const notesData = require('../db/db.json');

const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

router.get('/', (req, res) => res.status(200).json(notesData))

router.post('/', (req, res) => {
    const { title, text } = req.body
    const newNote = {
        title, text, id: uuidv4()
    }
    const payload = {
        status: 'success',
        body: newNote
    }
    notesData.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData))
    res.json(payload)
})



//look up find index method and splice method 
module.exports = router