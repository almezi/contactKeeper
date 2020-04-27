const express = require('express');
const router = express.Router();

//@route get API/AUTH
//@desc  GET LOGGED IN USER
//@ACCESS PRIVATE
router.get('/', (req, res) => {
	res.send('Get Logged user');
});
//@route POST API/AUTH
//@desc  auth user and get token
//@ACCESS public
router.post('/', (req, res) => {
	res.send('log in user');
});
module.exports = router;