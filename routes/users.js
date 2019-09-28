var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET users list. */
router.get('/', function(req, res, next) {

  User.find()
  .then(doc => {
    console.log('saved data data ',doc);
    res.send(doc);
  })
  .catch(err => {
    res.send(err);
  })

});

/* GET ONE user. */
router.get('/:id', function(req, res, next) {

  User.findOne({_id:req.params.id})
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


});


module.exports = router;
