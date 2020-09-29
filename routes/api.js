const express = require("express");
const router = express.Router();

//Get a list of ninjas from the database
router.get("/ninjas", function (req, res) {
  res.send({
    type: "GET",
  });
});

// //Add a new Ninja to the database
// router.post("/ninjas", function (req, res) {
//   res.send({
//     type: "POST",
//   });
// });

// //Update Ninja in the database
// router.put("/ninjas/:id", function (req, res) {
//   res.send({
//     type: "PUT",
//   });
// });

// //Delete a Ninja from the database
// router.get("/ninjas/:id", function (req, res) {
//   res.send({
//     type: "DELETE",
//   });
// });

export default router;
