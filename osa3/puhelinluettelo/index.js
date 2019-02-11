

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')


app.use(bodyParser.json())
app.use(morgan('tiny', () => {request.body}))
app.use(cors())
let numbers = [
    {
        id: "1",
        name: "Arto Hellas",
        number: "12345"
    },
    {
        id: "2",
        name: "Arto Järvinen",
        number: "123456"
    },
    {
        id: "3",
        name: "Lea kutvonen",
        number: "12345678"
    }
]

app.post('/api/persons', (request, response) => {
   console.log(request.body)
    const number = request.body


    if (number.name === "") {
        response.status(400).json({
            error: 'name missing'
        })
    } else if (number.number === "") {
        response.status(400).json({
            error: 'number missing'
        })
    } else {
        const existing = numbers.find(n => n.name === number.name)
        if (existing) {
            response.status(400).json({
                error: 'name must be unique'
            })
        } else {
            number.id = Math.floor(Math.random() * 10000000000)
            numbers = numbers.concat(number)
            response.json(number)
        }
    }
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(numbers)
})

const date = new Date()
app.get('/info', (req, res) => {
    const responseText = 'Puhelinluettelossa ' + Object.keys(numbers).length + ' henkilön tiedot <br> ' + new Date()
    res.send(responseText)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const number = numbers.find(number => number.id === id)
    if (number) {
        response.json(number)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    numbers = numbers.filter(number => number.id != number);

    response.status(204).end();
});

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})