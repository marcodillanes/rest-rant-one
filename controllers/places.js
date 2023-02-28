const router = require('express').Router()
const places = require('../models')


// went back through from part one/ started from scratch to get just get things better organized and corrected after the notes of advice i received from the last submissions
router.get('/', (req, res) => {
  db.Place.find()
    .then(places => res.render('places/index', { places }))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

// creating with mongodb
router.post('/', (req, res) => {
assignUndefined(req.body)

db.Place.create(req.body)
  .then(() => res.redirect('/places'))
  .catch(err => {
    console.log(err.errors)
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (const field in err.errors) {
        message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}`
      }
      res.render('places/new', { prevValues: req.body, message })
    } else { res.status(404).render('error404') }
  })
})

// new for places
router.get('/new', (req, res) => {
res.render('places/new')
})

// editing
router.get('/:id', (req, res) => {
db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => res.render('places/show', { place }))
  .catch(err => {
    console.log(err)
    res.status(404).render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id)
          place.save()
            .then(res.redirect(`/places/${req.params.id}`))
        })
        .catch(err => {
          res.status(404).render('error404')
        })
    })
    .catch(err => {
      res.status(404).render('error404')
    })
})

// DELETE
router.delete('/:id/comment/:commentId', (req, res) => {
  db.comment.findByIdAndDelete(req.params.commentId)
    .then(res.redirect(`/places/${req.params.id}`))
    .catch(err => {
     console.log(err)
      res.status(404).render('error404')
    })
})

// SHOW
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => res.render('places/show', { place }))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/places'))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

// PUT
router.put('/:id', (req, res) => {
  assignUndefined(req.body)

  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect(`/places/${req.params.id}`))
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})

function assignUndefined(object) {
  for (const prop in object) if (!object[prop]) {object[prop] = undefined}
}

module.exports = router

