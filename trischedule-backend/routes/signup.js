const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore();
const uuidv4 = require('uuid/v4');
const moment = require('moment');
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

/* POST signup */
router.post('/', async function(req, res, next) {
  const email = req.body.email;
  const familyName = req.body.family_name;
  const givenName = req.body.given_name;
  const oauthProvider = req.body.oauth_provider;
  const userId = req.body.user_id;
  const query = firestore.collection('users').where('user_id', '==', userId);
  const userDoc = await query.get()
      .then((userSnapshot) => {
        if (userSnapshot.size == 0) {
          // write user to db
          firestore.collection('users').add({
            email: email,
            family_name: familyName,
            given_name: givenName,
            oauth_provider: oauthProvider,
            user_id: userId,
          })
              .then(function(docRef) {
                console.log('Document written with ID: ', docRef.id);
              })
              .catch(function(error) {
                console.error('Error adding document: ', error);
              });
          console.log(`user object written for user with userId ${userId}`);
          console.log(`creating workout schedule for user with userId ${userId}`);
          generateWorkoutSchedule(userId, res.status(204).send({
            email: email,
            family_name: familyName,
            given_name: givenName,
            oauth_provider: oauthProvider,
            user_id: userId,
          }));
        } else if (userSnapshot.size == 1) {
          // should just be 1 user
          userSnapshot.forEach((user) => {
            console.log(`sign up attempted for existing user
              with userId ${userId}`);
            const existingUser = user.data();
            res.status(200).send({
              email: existingUser.email,
              family_name: existingUser.family_name,
              given_name: existingUser.given_name,
              oauth_provider: existingUser.oauth_provider,
              user_id: existingUser.user_id,
            });
          });
        } else {
          res.status(409).send({
            email: email,
            family_name: familyName,
            given_name: givenName,
            oauth_provider: oauthProvider,
            user_id: userId,
          });
        }
      });
});

// could evolve to type of workout, workout start date
const generateWorkoutSchedule = function(userId, callback) {
  firestore.collection('12_week_olympic_beginner').get()
      .then((workoutScheduleTemplateSnapshot) => {
        workoutScheduleTemplateSnapshot.forEach((workout) => {
          const workoutData = workout.data();
          const uuid = uuidv4();
          const workoutDay = moment().add(workoutData.days_from_start_date, 'days')
              .format('YYYY-MM-DD');
          console.log(`workoutData ${JSON.stringify(workoutData)}`);
          firestore.collection('workouts').add({
            completed: false,
            minutes: workoutData.minutes,
            scheduled_day: workoutDay,
            user_id: userId,
            workout_comments: workoutData.comments,
            workout_id: uuid,
            workout_type: workoutData.workout_type,
          });
        });
      })
      .then(() => {

      });
};

module.exports = router;
