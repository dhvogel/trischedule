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
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import './App.css';
import T10eHeader from './components/t10e-header';

function App() {
  return (
    <div className="App">
      <T10eHeader />
      <List style={{paddingTop: 30, paddingLeft: 20, paddingRight:50}}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsRunIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary="Jan 9, 2014" />
          <Divider/>
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
