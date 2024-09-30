const express = require('express');
const router = express.Router();

const singlehotelHandler = require("../controllers/singleHotelController");


// http://localhost:3500/api/hotels/25wysj&gsys(id)

router.route("/:id")
    .get(singlehotelHandler)
  

module.exports = router;