const express = require('express')

const server = express()

server.listen(5000, () => {
    console.log('\n*** API running on port 5k ***\n')
})

server.get('/', (req, res) => {
    res.send("It's alive!")
})