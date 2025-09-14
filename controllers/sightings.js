const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

//Create
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


//Read
router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render('sightings/index.ejs', {
      sightings: currentUser.sightings,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

//Show Page
router.get('/:sightingId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const sightings = currentUser.sightings.id(req.params.sightingId);
    res.render('sightings/show.ejs', {
      sighting: sightings,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

//Update
router.get('/:sightingId/edit', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const sightings = currentUser.sightings.id(req.params.sightingId);
    res.render('sightings/edit.ejs', {
      sighting: sightings,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.put('/:sightingId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const sighting = currentUser.sightings.id(req.params.sightingId);
    sighting.set(req.body);
    await currentUser.save();
    res.redirect(
      `/users/${currentUser._id}/sightings/${req.params.sightingId}`
    );
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

//Delete
router.delete('/:sightingId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.sightings.id(req.params.sightingId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/sightings`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;