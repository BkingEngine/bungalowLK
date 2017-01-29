var express = require('express');
var router = express.Router();

var rootRes = require('../model/rootresources.js');

router.get('/', function(req, res, next) {
  console.log('GET : all root resources ')
  rootRes.find(function (err, rootResource) {
    if (err) return next(err);
    res.json(rootResource);
  });
});

router.post('/', function(req, res, next) {
  console.log('POST : Add resources  '+JSON.stringify(req.body))
  rootRes.create(req.body, function (err, post) {
    if (err){
      console.log(err)
      return next(err);
    } 
    console.log('Successfully write to db !!!! '+post )
    res.json(post);
  });
});

/** get all resources */
// router.get('/resources',function(req,res){
// var query;
//              query = ( [
//              	{$match:{type:'HOTEL'}}
//                 ] )
//              console.log(query)

//   db.collection("rootresources").aggregate(query).toArray(function(err,docs){
//   	console.log('---------------------'+JSON.stringify(docs));
//   	res.json('test')
//   });   
   // docs.each(function(err, doc) {
    //   if(doc) {
    //     console.log(doc);
    //   }
    //   else {
    //     res.end();
    //   }
    // });

//});

/** get all resources for given root resource
router.get('/resources',function(req,res){
var query;
             query = ( [
             	{$match:{type:'HOTEL'}}
                ] )
             console.log(query)

  db.collection("rootresources").aggregate(query).toArray(function(err,docs){
  	console.log('---------------------'+JSON.stringify(docs));
  	res.json('test')
  });    // docs.each(function(err, doc) {
    //   if(doc) {
    //     console.log(doc);
    //   }
    //   else {
    //     res.end();
    //   }
    // });

});
**/

module.exports = router;