const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const TaskSchema = mongoose.Schema({
  name: {
    type: String
  },
  details: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  isDone: {
    type: Boolean,
    default: false
  }
  
});

const Todo = module.exports = mongoose.model('Todo', TaskSchema, 'tasks');

module.exports.getTodoById = function(id, callback){
  User.findById(id, callback);
}



module.exports.addTodo = function(newTodo){
  console.log('user to add', newTodo);
  newTodo.save()
   .then(doc => {
     console.log('return answer. ', doc);
   })
   .catch(err => {
     console.error(err);
   })

}





module.exports.getTodoByName = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  console.log('user to add', newUser);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
