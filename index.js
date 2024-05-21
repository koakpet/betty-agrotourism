//require('dotenv').config();

// Dependencies Required
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');


// Setup of Express
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// ROUTES
// Route Control for the Home Page
app.get('/', function(req,res){
  res.render('index');
});

app.get('/posts', function(req, res){
  res.render('posts')
})

// Route Control for the About Page
app.get('/about', function(req,res){
  res.render('about');
});

// Route Control for the About Page
app.get('/about', function(req,res){
    res.render('about');
  });

// // Route Controls for the Blog Page
// app.get('/blog', function(req,res){
//   for(i=0; i < posts.length; i++){
//     res.render('blog', {posts: posts});
//   }
// });

// app.get('/blog/posts/:postName', function(req,res){ // for Route Parameters of individual blog post
//   for (i=0; i < posts.length; i++) {
//     if (_.lowerCase(posts[i].topic) === _.lowerCase(req.params.postName)) {
//       res.render('posts', {
//         topic: posts[i].topic,
//         article: posts[i].article,
//         date: "Today",
//         author: posts[i].author
//       });
//     } else res.redirect(blog);
//   }
// });

// // Routes Control for New Post
// app.get('/new', function(req, res){
//   res.render('new');
// });

// app.post('/new', function(req, res){
//   // const article = new Article ({
//   //   topic: req.body.topic,
//   //   author: req.body.author,
//   //   date: new Date(),
//   //   post: req.body.post
//   // });

//   // article.save();

//   // console.log('Post successfully saved to db');
  
//   const post ={
//     topic: req.body.topic,
//     author: req.body.author,
//     article: req.body.post
//   };

//   posts.push(post);

//   res.redirect("/blog");
// });


// Server
app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Server is running on Port 3000");
});
