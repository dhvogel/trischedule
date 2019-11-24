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
    activeUser: {},
  };

  handleWorkoutSelection = (workoutObject) => {
    this.setState({activeWorkout: workoutObject});
  }

  handleUserLogin = (userObject) => {
    this.setState({activeUser: userObject})
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Route path="/">
            Home page
          </Route>
          <Route path="/schedule/:athleteId">
            <T10eHeader onUserLogin={this.handleUserLogin} activeUser={this.state.activeUser}/>
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
