import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = {};

class T10eWorkoutModal extends React.Component<Props> {

  render () {
    const { workout, openModal } = this.props;
    if (!openModal) return null
    return (
      <div>
        <Modal>
          <div>
            {workout.workout_id}
          </div>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(T10eWorkoutModal);