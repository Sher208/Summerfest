const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const checkObjectId = require('../../utils/middleware/checkId');
const Competition = require('../../models/Competition');

// @route POST api/competition
// @desc  POST include competition in the array
// @access Public
router.post('/', [
    check('name', 'Competition name needs to be entered').not().isEmpty(),
    check('desc', 'Please enter what the description is about').not().isEmpty(),
], async function(req, res){
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()});
    }

    const {name, desc} = req.body;

    try{
        let competition = await Competition.findOne({name});

        if(competition){
            return res.status(400).json({ errors: [{msg: 'This competition already exists'}]})
        }

        competition = new Competition({
            name,
            desc
        });

        await competition.save();

        res.status(200).json(competition);

    }catch(e){
        console.log(e.message);
        res.status(500).send('Server error')
    }
    
});

router.get('/', async (req, res)=>{
    try{
        const competition = await Competition.find();
        res.status(200).json(competition);
    }catch(e){
        console.log(e.message);
        res.status(500).send('Server error');
    }
});

router.get('/:id', checkObjectId('id'), async function(req, res){
    try{
        const competition = await Competition.findById(req.params.id);
        if(!competition){
            return res.status(404).json({msg: 'Post not found'});
        }
        res.json(competition);
    }catch(err){
        res.status(404).send('Server error');
    }
});

module.exports = router;