const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log(req.method)
    res.send('/index')
})

module.exports = router