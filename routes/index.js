const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'));

// Comment
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});
router.get('/tweets/:num', function(req, res) {
  var id = Number(req.params.num);
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: list } );
});


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render('index', {
    tweets: tweets
  });
});




module.exports = router;