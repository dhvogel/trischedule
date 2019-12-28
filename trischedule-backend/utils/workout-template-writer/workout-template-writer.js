const twelveWeekOlympicBeginner = require('./12_week_olympic_beginner.json');
const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore();

twelveWeekOlympicBeginner.workouts.forEach((workout) => {
  firestore.collection('12_week_olympic_beginner').add(workout);
});
