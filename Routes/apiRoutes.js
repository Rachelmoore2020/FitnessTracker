//+++++++++++++++++++++++ from library tutorial
var express = require('express');
var router = express.Router();
const app = express();

//++++++++++
router.post("/submit", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});
//++++++++++++++++++++++++++++



//=========EDNA============
// app.post("/submit", ({ body }, res) => {
//     User.create(body)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  //=======================


  //+++++++++++++++++

  module.exports = router;
  //+++++++++++++++++++++
  module.exports = app;