const express = require ('express')
const router = express.Router()
const User = require ('../models/User.model')

router.get('/delete/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then((deleteUser) => res.json(deleteUser))
      .catch(err => console.log(err))
  })

router.get('/getAllUsers', (req,res)=>{

    User.find()
    .then(allUsers => res.json(allUsers))
    .catch(err=> console.log('DB error',err))
})

router.get('/:id', (req,res)=>{

    const userId = req.params.id
    User.findById(userId)
        .then(theUser => res.json(theUser))
        .catch(err=> console.log('DB error',err))
})

router.post('/new', (req,res) =>{
    const user = req.body
    User.create(user)
    .then(theNewUser => res.json(theNewUser))
    .catch(err=> console.log('DB error',err))
})


  router.post("/edit", (req, res) => {
    const {name,birthdate} = req.body.user;
    User.findByIdAndUpdate(req.body.id, { name,birthdate }, { new: true })
      .then(theUpdateUser => res.json(theUpdateUser))
      .catch(err => console.log("error!!", err));
  })

module.exports = router