import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  }
};

class T10eHeader extends React.Component<Props> {

  render() {

    return (
      <AppBar className={styles.appbar} style={{height: 50}}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3} style={{textAlign: 'left', paddingLeft: 50}}>
            TriSchedule
          </Grid>
          <Grid item xs={6} sm={9}>
            <Grid container spacing={2} style={{paddingRight: 20}}>
              <Grid item xs={9} />
                {
                  Object.entries(this.props.activeUser).length === 0 &&
                    this.props.activeUser.constructor === Object ?
                    (
                    <div>
                      <p></p>
                    </div>
                    )
                     : (
                        <p>Hello, {this.props.activeUser.given_name}</p>
                     )
                }
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    )
  }
}

export default T10eHeader;