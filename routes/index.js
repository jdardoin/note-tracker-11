const router = require('express').Router();
const noteroutes = require('./noteroutes.js')
router.use('/notes', noteroutes)

module.exports = router