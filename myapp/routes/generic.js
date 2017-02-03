var express = require('express');
var router = express.Router();

/* Render the Generic Template. */
router.get('/', function(req, res, next) {
  res.render('generic', { title: 'Gabe\'s Generic Template' });
});

module.exports = router;
