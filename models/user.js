const mongoose = require('mongoose');


const sightingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true,"the date is required"],
  },
  time: {
    type: String,
    match: [/^\d{2}:\d{2}$/, "Time must be in HH:mm format"],
    required: [true, "the time is required"],
  },
  location: {
    type: String,
    enum: [    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
    required: true
  },
  comments: {
    type: String, 
  },
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sightings: [sightingSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
