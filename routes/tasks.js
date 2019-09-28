var express = require('express');
var router = express.Router();

const Task = require('../models/task');

/* GET tasks list. */
router.get('/', function(req, res, next) {

  Task.find()
  .then(doc => {
    console.log('saved data data ',doc);
    res.send(doc);
  })
  .catch(err => {
    res.send(err);
  })

});

/* GET ONE task. */
router.get('/:id', function(req, res, next) {

  Task.findOne({_id:req.params.id})
  .then(doc => {
    console.log('saved data data ',doc);
    res.send(doc);
  })
  .catch(err => {
    res.send(err);
  })



});

/* POST task. */
router.post('/', (req, res, next)=>{
  const task = req.body;

  if (!task.name|| !(task.isDone + '') ) {
    res.status(400);
    res.json({
      "error": "invalid Data"
    });
  } else {
    Task.save()
   .then(doc => {
     console.log('saved data is ',doc);
     res.json(doc);
   })
   .catch(err => {
     console.error(err);
     res.json(err);
   })
  }
});

/* Update Task */

router.put('/:id', (req, res, next)=>{
  const task = req.body;
  const upObj = {};

  if(task.isDone) {
    upObj.isDone = task.isDone;
  }

  if (task.name) {
    upObj.name = task.name;
  }

  if (task.details) {
    upObj.details = task.details;
  }

  if (!upObj) {
    res.status(400);
    res.json({
      "error": "invalid data"
    });
  } else {
    Task.findOneAndUpdate(
      {
        _id: req.params.id
      },
      upObj,
      {
        new: true
      }
    ).then(doc => {
      console.log('Updated data ', doc)
    })
    .catch(err => {
      console.error(err)
    });
  }

});



/* Delete Task */

router.delete('/:id', (req, res, next)=>{
  
    Task.findOneAndDelete(
      {
        _id: req.params.id
      })
      .then(doc => {
      console.log('Updated data ', doc)
    })
    .catch(err => {
      console.error(err)
    });

});


module.exports = router;
