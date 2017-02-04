var express = require('express');
var router = express.Router();

/* Render the Generic Template. */
router.get('/', function(req, res, next) {
  res.render('generic', { 
  	title: 'Question Page',
  	area: 'Chapter1: Hardware',
  	topic: 'Microprocessors',
    question: 'This is the actual question e.g., what are the elements of a CPU',
    correct: 'This is the correct answer and maybe some explanation.'
  });
});

module.exports = router;
