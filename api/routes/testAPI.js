const express = require('express'); 

const router = express.Router(); 

// get requests
router.get('/', (req, res) => {
    res.json({"users" : ["1", "2", "3"]})
})


module.exports = router; 