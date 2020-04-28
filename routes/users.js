const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/Users');
//@route POST aou/users
//@desc  register a user
//@access Public
router.post(
	'/',
	[
		check('name', 'name is required').not().isEmpty(),
		check('email', 'email is required').isEmail(),
		check('password', 'password is must bigger than 6').isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email: email });

			if (user) {
				return res.status(400).json({ msg: 'User already exists' });
			}

			user = new User({
				name,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
			res.send('user Saved');
		} catch (err) {
			console.error(err.massage);
			res.status.send('server error');
		}
	}
);

module.exports = router;
