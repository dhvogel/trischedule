import React from 'react';
import AppBar from '@material-ui/core/AppBar'
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
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import './App.css';

const styles = (theme) => ({
  paper: {
    top: 62,
    width: 300,
    overflow: 'auto',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontStyle: 'italic',
  },
  key: {
    fontSize: 12,
    marginBlockEnd: '0.2em',
    color: 'gray',
  },
  value: {
    marginBlockStart: '0.2em',
  },
  card: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  cardHeaderRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  cardContentRoot: {
    'paddingTop': 0,
    'paddingBottom': 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});

function App() {
  return (
    <div className="App">
      <AppBar>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3} style={{textAlign: 'left', paddingLeft: 50}}>
            Tri______
          </Grid>
          <Grid item xs={6} sm={9}>
            <Grid container spacing={2} style={{paddingRight: 20}}>
              <Grid item xs={9} />
              <Grid item xs={1} >
                Goog
              </Grid>
              <Grid item xs={1}>
                Strava
              </Grid>
              <Grid item xs={1}>
                Fitbit
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>

      <List style={{padding: 30}}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsRunIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Run/Bike" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider/>
        <List>
          <ListItem>
            <Card style={{width: '100%'}}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={11}>
                    <Typography>
                      Run
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <CheckCircleOutlineIcon style={{color: 'gray'}}/>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card style={{width: '100%'}}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={11}>
                    <Typography>
                      Bike
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <CheckCircleIcon style={{color: 'green'}}/>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </ListItem>
        </List>
      </List>
    </div>
  );
}

export default App;
