var Author = require('../models/author');

exports.author_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Author list');
}

exports.author_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Author detail:' + req.params.id);
}

exports.author_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
}

exports.author_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};
