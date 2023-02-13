const router = require('express').Router()
//more in a moment
router.get('/', (req, res) => {
    res.send('GET/places')
})
module.exports = router