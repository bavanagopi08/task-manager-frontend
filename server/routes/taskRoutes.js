const express=require('express');
const router=express.Router();

const Task=require('../models/Task');

router.post('/add', async(req, res)=> {
    try {
        const newTask=new Task({
            title: req.body.title
        });
        await newTask.save();

        res.status(200).json("Task Added");
    }catch(error) {
        res.status(500).json(error);
    }
});

router.get('/', async (req, res)=> {
    try {
        const tasks=await Task.find();

        res.status(200).json(tasks);
    }catch(error) {
        res.status(500).json(error);
    }
});

router.delete('/delete/:id', async(req, res)=> {
    try {
        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:'Task Deleted'
        });
    }catch (error) {
        res.status(500).json({
            message:error.message
    });
    }
});

router.put('/update/:id', async(req, res)=> {
    try {
        await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title
            }
        );
        res.status(200).json("Task Updated");
    }catch(error) {
        res.status(500).json(error);
    }
});

module.exports=router;