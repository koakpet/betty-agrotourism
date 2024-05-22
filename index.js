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


const posts = [
  {
    title: "A Trip To Banadonase Farm",
    author: "Olaitan Ariyo",
    date: "Thursday, 3rd September 2015",
    article: "When you hear about women in aquaculture here is an example of one, meet mrs glory adonase,, a fisheries graduate and professional. Talk about fish farming in cross River state and you have the right woman, in need of good quality fingerlings then Banadonase Farm is the right place. The farm boast of good breed and low or zero mortality rate fingerlings . In need of good quality table size fish and hygienically processed catfish, banadonase farm is the place for you. They are located at 73 parliamentary extension in Calabar .... Phone no- 08036813836",
    image: "wia_1.jpg"
  },

  {
    title: "A visit to DE BUCHAZ Farm",
    author: "Olaitan Ariyo",
    date: "Wednesday, 26th August 2015",
    article: "I took a trip to DE BUCHAZ Farm and I was impressed. De BUCHAZ Farm have Fisheries and poultry section, their poultry is mainly layers and they boast of good quality egg, low cholesterol level, their fishes are well fed with the right feed composition and their maintainance practices is superb.. The farm is own by a lady currently undergoing Enterprenuership Development training at SSEDC in  Calabar. It good to see women involved in Agriculture",
    image: "Buchaz_1.jpg"
  },

  {
    title: "Cage Fish Farming and Economy Development",
    author: "Olaitan Ariyo",
    date: "Thursday, 3rd September 2015",
    article: "Do you know that cage fish farming is creating income opportunities and improving livelihood in Nigeria through skills and capacity development? The Osin Farm in Osun State adopted cage fish culture technology in 2009 and they were able to produce one ton of tilapia fish each with 2x2 meter 18 cages and the farm employ 65 workers mostly youths. If every state in Nigeria adopt cage fish culture technology, unemployment will decrease drastically and of course it will improve our livelihood.",
    image: "catfish_farming_1.jpg"
  }
]



// ROUTES
// Route Control for the Home Page
app.get('/', function(req, res){
  res.render('index', {posts:posts});
});

// app.get('/posts', function(req, res){
//   res.render('posts')
// })

// // Route Control for the About Page
// app.get('/about', function(req, res){
//   res.render('about');
// });

// Route Control for the About Page
app.get('/about', function(req, res){
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
