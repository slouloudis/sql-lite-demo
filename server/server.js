import express, { response } from 'express'
import Database from "better-sqlite3"
const db = new Database('database.db')

import cors from "cors"


const app = express()
// allows us to parse JSON
app.use(express.json())
// cross origin resourch sharing.
app.use(cors())

// HTTP method. 
// Hyper Text Transfer Protocol.
// Set of rules about how two computers talk to eachother. 

// GET
// write an endpoint so when we visit the root route '/' our server displays some text. 
// request object, response object
app.get('/', function(request, response) {
    response.json('	ᕕ(╭ರ╭ ͟ʖ╮•́)⊃¤=(————- This is the root route!')
})

app.get('/jokes', function(request, response) {
    const jokes = db.prepare("SELECT * FROM jokes").all()
    response.json(jokes)
} )

app.post('/jokes', function(request, response) {
    console.log(request.body)
    const setup = request.body.setup
    const punchline = request.body.punchline

    const newJoke = db.prepare(`INSERT INTO jokes (setup, punchline) VALUES (?,?)`).run(setup, punchline)

    response.json(newJoke)
})

app.listen(9090, function () {
    console.log('The server is listening on PORT: 9090')
})