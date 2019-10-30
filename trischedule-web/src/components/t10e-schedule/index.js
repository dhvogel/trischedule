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
import axios from 'axios';

class T10eSchedule extends React.Component<Props> {
  state = {
    workouts: []
  }

  componentDidMount() {
    const backendAddress = process.env.REACT_APP_TRISCHEDULE_BACKEND_ADDRESS
    axios.get(`${backendAddress}/athlete/abc`)
      .then(res => {
        console.log(res)
        // const posts = res.data.data.children.map(obj => obj.data);
        // this.setState({ posts });
    });
  }

  render() {
    return (
      <List style={{paddingTop: 30, paddingLeft: 20, paddingRight:50}}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsRunIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary="Jan 9, 2014" />
        </ListItem>
        <Divider/>
        <List>
          <ListItem>
            <Card style={{width: '100%'}}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={11}>
                      Run
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
                      Bike
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
    )
  }
}

export default T10eSchedule;