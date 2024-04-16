const express = require('express');
const router = express.Router();
const Joi = require('joi');
const User = require('../models/users');
const { default: mongoose } = require('mongoose');

router.post('/users', async(req,res)=>{
  const newId = new mongoose.Types.ObjectId()._id.toString();
  const users = new User({
    _id: newId,
    name: req.body.name,
    email: req.body.email,
    dni: req.body.dni
  }) 
  console.log(req.body)
  await users.save()
  res.send(users)

})
router.get("/users/:id", async (req,res)=>{
  const specificUser = await User.findById({_id:req.params.id})
  console.log(specificUser)
  res.send(specificUser);
})
router.delete("/users/:id", async(req,res)=>{
  const specificUser = await User.findByIdAndDelete({_id:req.params.id})
  console.log(specificUser);
  res.send(specificUser);

})

router.put("/users/:id",async(req,res)=>{
  const editUser = await User.findById({_id:req.params.id})
  if(req.body.name){editUser.name = req.body.name}
  if(req.body.email){editUser.email = req.body.email}
  if(req.body.dni){editUser.dni = req.body.dni}

  await editUser.save()
  res.send(editUser);
})
router.get('/users', async (req, res) => { // Include both req and res
    try {
      const users = await User.find(); // Assuming User model has a `find` method
      res.status(200).json(users);
    } catch (error) {
      console.error(error); // Use console.error for errors
      res.status(500).json({ error: 'Error fetching users' }); // More specific error message
    }
  });
module.exports = router ;