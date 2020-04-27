const express = require('express');
const router = express.Router();

//@route get API/contact
//@desc  get all user contact
//@ACCESS private
router.get('/', (req, res) => {
	res.send('get all contact');
});

//@route post API/contact
//@desc  add new contact
//@ACCESS private
router.post('/', (req, res) => {
	res.send('add contact');
});

//@route put API/contact/:id
//@desc  update contact
//@ACCESS private
router.put('/:id', (req, res) => {
	res.send('update contact');
});

//@route delete API/contact/:id
//@desc  delete contact
//@ACCESS private
router.delete('/:id', (req, res) => {
	res.send('delete contact');
});

module.exports = router;
