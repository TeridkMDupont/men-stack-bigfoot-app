const express = require('express');
const router = express.Router();
const { format } = require("date-fns")



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
    const sighting = currentUser.sightings.id(req.params.sightingId);
      const formattedDate = sighting?.date
      ? new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          timeZone: "UTC"
        }).format(new Date(sighting.date))
      : '';
    res.render('sightings/show.ejs', {
      sighting,
      formattedDate,
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
    const sighting = currentUser.sightings.id(req.params.sightingId);
    const dateISO = sighting?.date
      ? new Date(sighting.date).toISOString().slice(0, 10)
      : '';
    res.render('sightings/edit.ejs', {
      sighting,
      dateISO
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