const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function (req, res) {
    res.render('samplefile.ejs')
})

router.get('/abc', function (req, res) {
    res.render('pageTow.ejs')
})

module.exports = router