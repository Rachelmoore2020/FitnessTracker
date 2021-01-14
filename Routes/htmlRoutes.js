const router = require('express').Router();
var path = require("path");


router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // If no matching route is found default to home
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router