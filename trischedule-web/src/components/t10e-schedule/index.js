import React from 'react';
import List from '@material-ui/core/List';
import T10eWorkout from './t10e-workout';
import T10eDayHeader from './t10e-day-header';
import T10eWorkoutModal from './t10e-workout-modal';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

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
    axios.get(`${backendAddress}/athlete/abc/schedule`)
      .then(res => {
        console.log(res)
        const workouts = res.data.workouts;
        this.setState({ workouts });
    });
  }


  render() {
    if (!this.state.workouts) return null
    const { classes } = this.props;
    const workouts = this.state.workouts
    const workoutsGroupedByDate = workouts.reduce((workoutsSoFar, {scheduled_day, workout_type, completed, workout_comments, workout_id}) => {
      if (!workoutsSoFar[scheduled_day]) workoutsSoFar[scheduled_day] = []
      workoutsSoFar[scheduled_day].push({workout_type, completed, workout_comments, workout_id, scheduled_day});
      return workoutsSoFar
    }, {});

    const openModalWithWorkout = (workout) => {
      this.setState({
        openModal: true,
        activeWorkout: workout,
      });
    }

    const closeModalWithWorkout = () => {
      this.setState({
        openModal: false
      })
    }

    const handleCompletedChange = activeWorkout => event => {
      let workoutCopy = JSON.parse(JSON.stringify(this.state.activeWorkout));
      workoutCopy.completed = event.target.checked
      this.setState({
        activeWorkout: workoutCopy
      });
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
                        <div onClick={() => openModalWithWorkout(workout)}><T10eWorkout workout={workout} /></div>
                      )
                    }
                  </List>
                </div>)
            })
          }
        </List>
        <T10eWorkoutModal />
      </div>
    )
  }
}

export default withStyles(styles)(T10eSchedule);