import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';


class T10eHeader extends React.Component<Props> {
  render() {
    return (
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
    )
  }
}

export default T10eHeader;