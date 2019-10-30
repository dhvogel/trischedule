const express = require('express');
// eslint-disable-next-line
const router = express.Router();

/* GET users listing. */
router.get('/:athleteId', function(req, res, next) {
  const athleteId = req.params.athleteId;
  res.status(200).send({
    athlete_id: athleteId,
    first_name: 'DGlester',
    last_name: 'Hardunkichud',
  });
});

router.get('/:athleteId/schedule', function(req, res, next) {
  const athleteId = req.params.athleteId;
  res.status(200).send({
    athlete_id: athleteId,
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
        athlete_id: req.params.athleteId,
      },
      {
        workout_id: '2',
        scheduled_day: '2019-10-29',
        workout_type: 'BIKE',
        completed: true,
        workout_comments: 'a tough bike ride',
        athlete_id: req.params.athleteId,
      },
      {
        workout_id: '3',
        scheduled_day: '2019-10-29',
        workout_type: 'SWIM',
        completed: false,
        workout_comments: 'a refreshing swim',
        athlete_id: req.params.athleteId,
      },
      {
        workout_id: '4',
        scheduled_day: '2019-11-02',
        workout_type: 'BIKE',
        completed: false,
        workout_comments: 'a great way to stay in shape',
        athlete_id: req.params.athleteId,
      },
    ],
  });
});

module.exports = router;