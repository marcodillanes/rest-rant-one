// after reading the notes on my last submission same as i said in a different file i just started back from scratch to make sure i had everything a little better organized and yeah things are working finally lol
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => res.status(404).render('Error404'))


// Server Listeners
app.listen(process.env.PORT, () => console.log('SERVER CONNECTED'))


