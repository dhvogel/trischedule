import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItem from '@material-ui/core/ListItem';
import equal from 'fast-deep-equal';

const styles = {
  cardContent: {
    "&:last-child": {
      paddingBottom: 14
    }
  }
};

class T10eWorkout extends React.Component<Props> {

  render() {
    const { classes, workout } = this.props
    return (
      <ListItem>
        <Card style={{width: '100%'}}>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={3}>
              <Grid item xs={11}>
                  {workout.workout_type}
              </Grid>
              <Grid item xs={1}>
                {workout.completed ? (
                    <CheckCircleIcon style={{color: 'green'}}/>
                  ) : (
                    <CheckCircleOutlineIcon style={{color: 'gray'}}/>
                  )
                }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ListItem>
    )
  }

}

export default withStyles(styles)(T10eWorkout);