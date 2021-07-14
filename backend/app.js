const express = require('express')
const app = express()
const port = 3001
const db = require('./db')
const cors = require('cors')
require('dotenv').config()

// SERVER
app.listen(port, () => {
    console.log(`Listening, localhost:${port}`)
})

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('reached endpoint')
    res.end()
})

app.get('/allrecords', (req, res) => {
    db.query('SELECT * FROM users')
        .then(data => res.json(data.rows).status(200))
})

app.post('/newrecord', (req, res) => {
    db.query(`SELECT username FROM users WHERE username = '${req.body.username}';`)
        .then(data => {
            if (data.rows.length > 0) {
                res.status(400).end()
            } else if (data.rows.length === 0) {
                db.query(`INSERT INTO users ( username, password ) VALUES ( '${req.body.username}', '${req.body.password}' );`)
                    .then(data => {
                        res.json(data.rows).status(200)
                    })
            }
        })
})

app.post('/login', (req, res) => {
    db.query(`SELECT username FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}';`)
        .then(data => {
            if (data.rows.length > 0) {
                res.status(200).json(data)
            } else if (data.rows.length === 0) {
                res.status(400).json(data)
            }
        })
})