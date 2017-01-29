var express = require('express');
var router = express.Router();


router.route('bookings').get(function(req,res){
res.json("test");

});

module.exports = router;
