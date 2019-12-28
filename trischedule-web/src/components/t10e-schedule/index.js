import React from 'react';
import List from '@material-ui/core/List';
import T10eWorkout from './t10e-workout';
import T10eDayHeader from './t10e-day-header';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const styles = {
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: 10,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  checkboxRoot: {
    padding: 0
  }
};

class T10eSchedule extends React.Component<Props> {
  state = {
    workouts: [],
    activeWorkout: {
      workout_id: '',
      workout_date: ''
    },
    openModal: false,
  }

  componentDidMount() {
    const backendAddress = process.env.REACT_APP_TRISCHEDULE_BACKEND_ADDRESS
    //TODO: parameterize this
    axios.get(`${backendAddress}/athlete/abc/schedule`)
      .then(res => {
        const workouts = res.data.workouts;
        this.setState({ workouts });
    });
  }

  handleWorkoutChange = (workout) => {
    this.props.onSelectWorkout(workout);
    //TODO: parameterize this
    this.props.history.push('/schedule/abc/workout/1')
  }

  render() {
    if (!this.state.workouts) return null
    const workouts = this.state.workouts
    const workoutsGroupedByDate = workouts.reduce((workoutsSoFar, {scheduled_day, workout_type, completed, workout_comments, workout_id}) => {
      if (!workoutsSoFar[scheduled_day]) workoutsSoFar[scheduled_day] = []
      workoutsSoFar[scheduled_day].push({workout_type, completed, workout_comments, workout_id, scheduled_day});
      return workoutsSoFar
    }, {});

    if (Object.entries(workoutsGroupedByDate).length === 0
      && workoutsGroupedByDate.constructor === Object) {
        return (
          <div>
            <br /><br />
            <p>No workouts :(</p>
          </div>
        )
      }

    return (
      <div>
        <List style={{paddingTop: 60, paddingLeft: 20, paddingRight:50}}>
          {
            Object.entries(workoutsGroupedByDate).map(([date, workouts], idx) => {
              return (
                <div>
                  <T10eDayHeader date={ date } />
                  <List>
                    {
                      workouts.map((workout) =>
                          <div onClick={() => this.handleWorkoutChange(workout)}>
                            <T10eWorkout workout={workout} />
                          </div>
                      )
                    }
                  </List>
                </div>)
            })
          }
        </List>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(T10eSchedule));