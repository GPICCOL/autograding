var express = require('express');
var router = express.Router();

/* Render the Generic Template. */
router.get('/', function(req, res, next) {
  res.render('generic', { 
  	title: 'Question Page',
  	area: 'This is the Topic Area e.g., Chapter1 Hardware',
  	topic: 'This is the topic e.g., Microprocessors',
    question: 'This is the actual question e.g., what are the elements of a CPU'
  });
});

module.exports = router;
