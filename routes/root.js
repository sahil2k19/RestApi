const express = require('express');

const router = express.Router();


// creating the routes

// get
router.get('/', function(req,res){
    return res.send('hi this is home page')
})
router.use('/courses',require('./courses.js'))


module.exports = router;