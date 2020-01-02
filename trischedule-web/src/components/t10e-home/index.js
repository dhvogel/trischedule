import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const styles = {
  googleButton: {
    width: '100%',
  }
};

class T10eHome extends React.Component<Props> {

  render() {
    const responseGoogle = (response) => {
      const backendAddress = process.env.REACT_APP_TRISCHEDULE_BACKEND_ADDRESS
      axios.post(`${backendAddress}/signup`, {
          email: response.profileObj.email,
          family_name: response.profileObj.familyName,
          given_name: response.profileObj.givenName,
          oauth_provider: 'GOOGLE',
          user_id: response.profileObj.googleId,
        })
        .then(res => {
          console.log(`SIGNUP RESPONSE: ${JSON.stringify(res)}`);
          if (res.status === 200) {
            console.log(`existing user attempted signup with userId ${res.data.user_id}`);
            this.props.onUserLogin(res.data);
            this.props.history.push(`/schedule/${res.data.user_id}`)
          } else if (res.status === 204) {
            console.log(`signup successful for user with userId ${res.data.user_id}`);
            this.props.onUserLogin(res.data);
            this.props.history.push(`/schedule/${res.data.user_id}`);
          } else {
            console.log(`uncaught error during signup for user with userId ${response.profileObj.googleId}`);
          }
        });
    }

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
              <GoogleLogin
                clientId="1023134307181-t41n9fain7ugre6n7up55fmg5uv88mia.apps.googleusercontent.com"
                buttonText="Sign up"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>

    )
  }
}

export default withRouter(withStyles(styles)(T10eHome));