const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
  try {
    res.render('sightings/index.ejs');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.get('/new', async (req, res) => {
  res.render('sightings/new.ejs');
});

router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.sightings.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/sightings`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;