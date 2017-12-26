const express = require('express');
const router = express.Router();

router.post('/', (req,res,next)=>{
  res.status(200).json({
  message: "el 7dl al 3azim",
    message2: req.body
});
});


/*
router.post('/', (req, res, next) =>
{
  let event  = new Event ({
    content: req.body
  });
  event.save((err, result)=>{
    if (err) {
      //here we use return so that if there is an error the response block
      //doesn't get executed
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
      res.status(201).json({
        message: 'Saved message',
        obj: result
        //here result would be response.json() instance object from message.service
      });
    })
  });
*/


module.exports = router;

