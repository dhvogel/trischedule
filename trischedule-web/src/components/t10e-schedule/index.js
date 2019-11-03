import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import T10eWorkout from './t10e-workout';

import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class T10eSchedule extends React.Component<Props> {
  state = {
    workouts: []
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
    const {classes} = this.props
    const workouts = this.state.workouts
    const workoutsGroupedByDate = workouts.reduce((workoutsSoFar, {scheduled_day, workout_type, completed, workout_comments}) => {
      if (!workoutsSoFar[scheduled_day]) workoutsSoFar[scheduled_day] = []
      workoutsSoFar[scheduled_day].push({workout_type, completed, workout_comments});
      return workoutsSoFar
    }, {})
    return (
      <div>
        <List style={{paddingTop: 60, paddingLeft: 20, paddingRight:50}}>
          {
            Object.entries(workoutsGroupedByDate).map(([date, workouts], idx) => {
              return (
              <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DirectionsRunIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText secondary={date} />
              </ListItem>
              <Divider/>
              <List>        
                {
                  workouts.map((workout) =>
                    <ListItem>
                      <T10eWorkout workout={workout} />
                    </ListItem>
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

export default withStyles(styles)(T10eSchedule);