const express = require('express')

const db = require('./data/db.js')

const server = express()

server.listen(5000, () => {
    console.log('\n*** API running on port 5k ***\n')
})

server.get('/', (req, res) => {
    res.send("It's alive!")
})

server.get('/hubs', (req, res) => {
    db.hubs
        .find()
        .then(hubs => {
            res.json(hubs)
        })
        .catch(err => {
            res.json({ error: err, message: 'Something broke'})
        })
})