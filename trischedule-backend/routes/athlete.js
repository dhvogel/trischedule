const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore();

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  const userId = req.params.userId;
  res.status(200).send({
    user_id: userId,
    first_name: 'DGlester',
    last_name: 'Hardunkichud',
  });
});

router.get('/:userId/schedule/mocked', function(req, res, next) {
  const userId = req.params.userId;
  res.status(200).send({
    user_id: userId,
    workouts: [
      {
        workout_id: '1',
        // day of the workout
        scheduled_day: '2019-10-28',
        // kind of workout (e.g. RUN, BIKE, or SWIM)
        workout_type: 'RUN',
        // whether the workout has been completed or not
        completed: false,
        // strava_activity_id: string (for strava integration)
        // comments about the workout
        workout_comments: 'a great workout today',
        // athlete to which this workout belongs
        user_id: req.params.userId,
      },
      {
        workout_id: '2',
        scheduled_day: '2019-10-29',
        workout_type: 'BIKE',
        completed: true,
        workout_comments: 'a tough bike ride',
        user_id: req.params.userId,
      },
      {
        workout_id: '3',
        scheduled_day: '2019-10-29',
        workout_type: 'SWIM',
        completed: false,
        workout_comments: 'a refreshing swim',
        user_id: req.params.userId,
      },
      {
        workout_id: '4',
        scheduled_day: '2019-11-02',
        workout_type: 'BIKE',
        completed: false,
        workout_comments: 'a great way to stay in shape',
        user_id: req.params.userId,
      },
    ],
  });
});

router.get('/:userId/schedule', async function(req, res, next) {
  const query = firestore.collection('workouts')
      .where('user_id', '==', req.params.userId);
  // offset is where to start the query return (in case of repeated queries)
  const workoutDocs = await query.limit(10).offset(0).get();
  const workouts = [];
  workoutDocs.forEach((workoutDoc) => {
    workouts.push(workoutDoc.data());
  });
  res.status(200).send({
    user_id: req.params.userId,
    workouts: workouts});
});

module.exports = router;
