var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
/** get all resources */

var db;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/bookingengine", function(err, database) {
  if(err) throw err;

  db = database;

  // Start the application after the database connection is ready
  //app.listen(3000);
  console.log("Listening on port 3000");
});
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

module.exports = router;