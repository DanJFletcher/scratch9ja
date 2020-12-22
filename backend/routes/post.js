const router = require('express').Router();
const User = require('../models/User');
const verify = require('./verifyToken');

// router.get('/', verify, ( req, res ) => {

//   res.send(req.user);
// });

router.get("/", verify, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    name: user.name,
    id: user._id
  });
})

// CHECK IF TOKEN IS VALID
router.post("/tokenIsValid", verify, async (req, res) => {
  try {
    const verified = await User.findById(req.user);
     if (!verified) return res.json(false);

     return res.json(true)
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})



module.exports = router;