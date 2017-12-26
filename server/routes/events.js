const express = require('express');
const router = express.Router();


router.get('/', (req,res,next)=>{
  res.status(200).json({
  message: "el 7dl al 3azim"
});
});

module.exports = router;
