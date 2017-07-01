const express = require('express');
const path = require('path');

// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res) {
  let articles = [{
      id: 1,
      title: 'Article one',
      author: 'Raghav Sharma',
      body: 'This is the first article',
    },
    {
      id: 2,
      title: 'Article two',
      author: 'John Doe',
      body: 'This is the second article',
    },
    {
      id: 3,
      title: 'Article three',
      author: 'Jane Doe',
      body: 'This is the third  article',
    },
  ]
  res.render('index', {
    title: 'Articles',
    articles: articles,
  });
});

// Adding Arcticles Route
app.get('/articles/add', function(req, res) {
  res.render('add_article', {
    title: 'Add Articles',
  });
});

// Start Server
app.listen(3000, function() {
  console.log('Server started on port 3000...');
});