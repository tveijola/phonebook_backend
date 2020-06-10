require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()
app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('content', req => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  } else {
    return null
  }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

app.get('/info', (req, res) => {
  Person.countDocuments().then(count => {
    res.send(
      `<p>Phonebook has info for ${count} people</p>
     <p>${new Date().toUTCString()}`
    )
  })
})

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(persons => res.json(persons))
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(400).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const body = req.body
  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person.save()
    .then(savedPerson => res.json(savedPerson))
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const person = {
    name: req.body.name,
    number: req.body.number,
  }
  console.log('Updating person:', person)
  Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true, context: 'query' })
    .then(updatedPerson => res.json(updatedPerson))
    .catch(error => next(error))
})

const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})