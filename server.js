// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");

// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Mongoose
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/my_database');

// Initialize Express
var app = express();
// app.use(bodyParser.json());

// Handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// --------------
// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// Retrieve data from the db
app.get("/all", function(req, res) {
  db.scrapedData.find({}, function(error, found) {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

// Scrape data and place into monogodb db
app.get("/scrape", function(req, res) {
  request("https://old.reddit.com/r/Fitness/", function(error, reponse, html) {
    var $ = cheerio.load(html);

    $(".title").each(function(i, element) {
      var title = $(this)
        .children("a")
        .text();
      var link = $(this)
        .children("a")
        .attr("href");

      if (title && link) {
        db.scrapedData.insert(
          {
            title: title,
            link: link
          },
          function(err, inserted) {
            if (err) {
              console.log(err);
            } else {
              console.log(inserted);
            }
          }
        );
      }
    });
  });
  res.send("Scrape Complete");
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
