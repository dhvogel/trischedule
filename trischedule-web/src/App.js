import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import T10eHeader from './components/t10e-header';
import T10eSchedule from './components/t10e-schedule';
import T10eWorkoutDetails from './components/t10e-workout-details';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class App extends React.Component<Props>  {
  state = {
    activeWorkout: {},
  };

  handleWorkoutSelection = (workout) => {
    this.setState({activeWorkout: workout});
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Route path="/schedule/:athleteId">
            <T10eHeader />
            <T10eSchedule onSelectWorkout={this.handleWorkoutSelection}/>
          </Route>
          <Route path="/schedule/:athleteId/workout/:workoutId">
            <T10eWorkoutDetails activeWorkout={this.state.activeWorkout}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
