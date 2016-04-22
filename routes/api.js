var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Director = mongoose.model('Director');

router.route('/directors')	
	//gets all directors
	.get(function(req, res){
		console.log('debug1');
		Director.find(function(err, posts){
			console.log('debug2');
			if(err){
				return res.send(500, err);
			}
			return res.send(200,posts);
		});
	});

//post-specific commands. likely won't be used
router.route('/directors/:id')
	//gets specified director
	.get(function(req, res){
		Director.findById(req.params.id, function(err, post){
			if(err)
				res.send(err);
			res.json(post);
		});
	});

module.exports = router;