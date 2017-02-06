var express = require('express');
var router = express.Router();
//var myArr = JSON.parse(../bin/questions.json);
var obj = JSON.parse(
	'{"area": "JSON Chapter1: Hardware", "topic": "JSON Microprocessors", "question": "JSON This is the actual HARDWARE question e.g., what are the elements of a CPU", "answer": "JSON This is the correct HARDWARE answer and maybe some explanation."}'
	);
/* Render the Generic Template. */
router.get('/', function(req, res, next) {
  res.render('generic', { 
  	title: 'Question Page',
  	area: obj.area,
  	topic: obj.topic,
    question: obj.question,
    correct: obj.answer
  });
});

module.exports = router;
