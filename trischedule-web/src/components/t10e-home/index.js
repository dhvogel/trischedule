import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';

const styles = {};

class T10eHome extends React.Component<Props> {

  render() {
    return (
      <div style={{padding: 50}}>
        <p style={{fontSize: '500%'}}>Own your triathlon prep.</p>
        <Grid container spacing={3}>
          <Grid item xs={2} />
          <Grid item xs={4}>
              <p style={{fontSize: '200%', textAlign:'left'}}>* Train like the pros</p>
              <p style={{fontSize: '200%', textAlign:'left'}}>* Compete with other racers</p>
              <p style={{fontSize: '200%', textAlign:'left'}}>* Earn entry to events</p>
          </Grid>
          <Grid item xs={4}>
            Sign up with Google /
            Sign up with Fitbit /
            Sign up with Facebook
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>

    )
  }
}

export default withStyles(styles)(T10eHome);