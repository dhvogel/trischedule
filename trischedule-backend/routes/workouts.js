var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:workoutId', function(req, res, next) {
  const workoutId = req.params.workoutId;
  res.status(200).send({
    workout_id: workoutId,
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
    athlete_id: '12345',
  });
});

module.exports = router;
