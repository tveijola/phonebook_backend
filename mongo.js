const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  console.log('Alternatively, also provide name and number of a new phonebook entry:')
  console.log('node mongo.js <password> <name> <number>')
  process.exit(1)
}

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-8mszv.mongodb.net/phonebook_backend?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

if (process.argv.length < 5) {
  Person.find({}).then(result => {
    console.log('Phonebook:')
    result.forEach(person => console.log(person.name, person.number))
    mongoose.connection.close()
  })
} else {
  const name = process.argv[3]
  const number = process.argv[4]
  const note = new Person({
    name: name,
    number: number,
  })

  note.save().then(() => {
    console.log(`Added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}