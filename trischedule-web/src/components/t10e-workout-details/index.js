import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  paper: {
    top: 62,
    width: 400,
    overflow: 'auto',
    height: '100%',
  },
  checkboxRoot: {
    padding: 0
  }
};

class T10eWorkoutModal extends React.Component<Props> {

  render () {

    const { activeWorkout, classes } = this.props;
    const handleCompletedChange = activeWorkout => event => {
      let workoutCopy = JSON.parse(JSON.stringify(activeWorkout));
      workoutCopy.completed = event.target.checked
      this.setState({
        activeWorkout: workoutCopy
      });
    }

    // const closeModalWithWorkout = () => {
    //   openModal = false;
    // }

    return (
      <Drawer
        anchor="right"
        open={true}
        // React does not recognize pullRight and pullright is considered a
        // non-boolean attribute.
        pullright={'true'}
        classes={{paper: classes.paper}}
        variant="persistent"
        docked='false'
      >
          <div style={{padding: 10}}>
            <Grid container spacing={0}
              direction='column'
              justify='center'
              alignItems='center'>
              <b>{activeWorkout.workout_type}</b>
            </Grid>
            <Grid container spacing={0}
              direction='column'
              justify='center'
              alignItems='center'
              style={{paddingTop: 5}}>
              <i>{activeWorkout.scheduled_day}</i>
            </Grid>
            <Grid container>
              <TextField
                id="workout-comments"
                label="Workout comments"
                multiline
                rows="1"
                defaultValue={activeWorkout.workout_comments}
                margin="normal"
                style={{width: '90%'}}
                autoFocus={true}
                key={activeWorkout.workout_comments}
              />
            </Grid>
            <Grid container spacing={2} style={{paddingTop: 30}}>
              <Grid item xs={1}>
                Completed:
              </Grid>
              <Grid item xs={5}>
                <Checkbox
                  checked={activeWorkout.completed}
                  className={classes.checkboxRoot}
                  onChange={handleCompletedChange(activeWorkout)} />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{paddingTop: 30}} justify='center' onClick={() => {console.log('button click')}}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}>
                Save Workout
              </Button>
            </Grid>
          </div>
      </Drawer>

    )
  }
}

export default withStyles(styles)(T10eWorkoutModal);