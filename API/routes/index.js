var express = require('express');
const axios = require('axios');
var router = express.Router();
const { default: mongoose, Mongoose } = require('mongoose');



var url = "mongodb://localhost:27017/bon";

mongoose.connect("mongodb://localhost:27017/bon")
  .then(() => console.log("db conn"))
  .catch((err) => console.log(err))

const loginData = mongoose.Schema({
  username: String,
  password: String,
  email: String
}, {
  timestamps: true
})

const userModel = mongoose.model("user", loginData);

const hotelData = mongoose.Schema({
  name: String,
  email: String,
  rooms: String,
  adults: Number,
  child: Number,
  checkin: String,
  checkout: String
}, {
  timestamps: true
})

const hotelModel = mongoose.model("hotel", hotelData);


/* GET home page. */
// router.get('/', async (req, res) => {
//   const data = await userModel.find({})
//   res.json({ success: true, data: data })
// });

router.get('/book', async (req, res) => {
  const data = await hotelModel.find({})
  res.json({ success: true, data: data })
});

router.post("/create", async (req, res) => {
  console.log(req.body)
  const data = new userModel(req.body)
  try {
    data.save();
    res.json("success");
  } catch (error) {
    res.status(500).send(error);
  }
})


router.post("/Login", (req, res) => {
  var { username, password } = req.body;
  userModel.findOne({ username: username })
    .then(user => {
      if (user) {
        if (password === user.password) {
          res.json("success")
        } else {
          res.json("fail")
        }
      } else {
        res.json("not register")
      }
    })
});

router.post("/Delete", async(req, res) => {
  var {_id} = req.body;
  await hotelModel.findByIdAndRemove({ _id: _id })
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
  }
});

router.post("/Deleteuser", async(req, res) => {
  var {_id} = req.body;
  await userModel.findByIdAndRemove({ _id: _id })
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
  }
});
router.get('/user', async (req, res) => {
  const data = await userModel.find({})
  res.json({ success: true, data: data })
});


router.post("/hotell", async (req, res) => {
  console.log(req.body)
  const data = new hotelModel(req.body)
  await data.save()
  res.send({ success: true, message: "data save successfully" })
  // .catch(err => console.log(err))
})





module.exports = router;
