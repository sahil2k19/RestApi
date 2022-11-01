const express = require('express');
const { update } = require('../models/course');
const router = express.Router();
const Course = require('../models/course')

// creating the routes

// get all the course
router.get('/', async function(req,res){
     try{
        // we use async await (as we need to respond after fetching all courses)
        const courses = await Course.find();
        res.json(courses);
     }catch(err){
        res.json(err);
     }

})

// get single course
router.get('/:id', async function(req,res){
    const id = req.params.id;
    try{
       const course = await Course.findById(id);
       res.json(course);
    }catch(err){
       res.json(err);
    }

})


// create course
// to create a course we need body-parser in main index file
router.post("/", async (req,res)=>{
    const course = await Course.create(req.body);
    res.json(course)
})






// update course

router.put("/:id",async (req,res)=>{
    const id = req.params.id;
    try {
       const updateCourse= await Course.updateOne({_id:id},req.body);
       res.json(updateCourse);
    } catch (err) {
        res.json(err);
    }

})



// delete course

router.delete('/:id', async function(req,res){
    try{
        await Course.deleteOne({_id:req.params.id})
        res.json({
            message:"done",

        })
    }
    catch(err){
        res.json({
            message:"error"
        })
    }   
})


// 

module.exports = router;