const express = require('express')
const { getHomepage, getABC } = require('../controllers/homeControllers')
const router = express.Router()

//router.Method('/route',handler)
router.get('/', getHomepage)
router.get('/abc', getABC)
module.exports = router;