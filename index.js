// implement your API here
const express = require('express') // import express

const db = require('./data/db')

const server = express() // created server

// handle requests to the root  of the api
server.get('/', (req, res) => {
    res.send("hello")
})

// get to /users that returns the list of users
server.get('/users', (req, res) => {
    db.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.json({error: 'failed to get users'}))
})
// get to find a user by id
server.get('/users/:id', (req, res) => {
    const id = req.params.id
    db.findById(id)
        .then(user => {
            res.json(user)
        })
        .catch(err => res.json({error: 'failed to get user'}))
})

// watching for connections on port 5000
server.listen(5000, () => {
    console.log('running on port 5000')
})
