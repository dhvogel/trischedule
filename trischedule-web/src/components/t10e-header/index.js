import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';
import GoogleLogin from 'react-google-login';
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
    const responseGoogle = (response) => {
      console.log(response);
      this.props.onUserLogin(response.profileObj);
    }

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
                      <Box display="flex" justifyContent="flex-start">
                        <Box item p={1} style={{padding:10}}>
                            <GoogleLogin
                              clientId="1023134307181-g63dga5nnpgk7ca9lijqb1qos9qdfkel.apps.googleusercontent.com"
                              buttonText="Login"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}
                            />
                        </Box>
                      <Box style={{padding:10}}>
                        Strava
                      </Box>
                      <Box style={{padding:10}}>
                        Fitbit
                      </Box>
                     </Box>
                    </div>
                    )
                     : (
                        <p>Hello, {this.props.activeUser.givenName}</p>
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