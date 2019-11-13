import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
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

class T10eWorkoutModal extends React.Component<Props> {

  render () {
    const { workout, openModal, classes } = this.props;
    if (!openModal) return null

    const handleCompletedChange = activeWorkout => event => {
      let workoutCopy = JSON.parse(JSON.stringify(this.state.activeWorkout));
      workoutCopy.completed = event.target.checked
      this.setState({
        activeWorkout: workoutCopy
      });
    }

    const closeModalWithWorkout = () => {
      this.setState({
        openModal: false
      })
    }

    return (
      <div>
        <Modal
          open={this.state.openModal}
          onClose={closeModalWithWorkout}
        >
          <div className={classes.paper}>
            <Grid container spacing={0}
              direction='column'
              justify='center'
              alignItems='center'>
              <b>{this.state.activeWorkout.workout_type}</b>
            </Grid>
            <Grid container spacing={0}
              direction='column'
              justify='center'
              alignItems='center'
              style={{paddingTop: 5}}>
              <i>{this.state.activeWorkout.scheduled_day}</i>
            </Grid>
            <Grid container>
              <TextField
                id="workout-comments"
                label="Workout comments"
                multiline
                rows="1"
                defaultValue={this.state.activeWorkout.workout_comments}
                margin="normal"
                style={{width: '90%'}}
              />
            </Grid>
            <Grid container spacing={2} style={{paddingTop: 30}}>
              <Grid item xs={3}>
                Completed:
              </Grid>
              <Grid item xs={9}>
                <Checkbox
                  checked={this.state.activeWorkout.completed}
                  className={classes.checkboxRoot}
                  onChange={handleCompletedChange(this.state.activeWorkout)} />
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
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(T10eWorkoutModal);