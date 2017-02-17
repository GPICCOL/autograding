var express = require('express');
var router = express.Router();

var rawdata = require("../bin/questions.json");


/* Render the Generic Template. */
router.get('/', function(req, res, next) {
	var randomNum = Math.floor(Math.random() * 3 + 1);
  	var obj = rawdata.questions[randomNum]
  res.render('generic', { 
  	title: 'Question Page',
  	area: obj.area,
  	topic: obj.topic,
    question: obj.question,
    correct: obj.answer
  });
});

module.exports = router;
