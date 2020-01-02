import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

const styles = {};

class T10eDayHeader extends React.Component<Props> {

  render() {
    const { date } = this.props;
    return (
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsRunIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary={moment(date).format('LL')} />
        </ListItem>
        <Divider/>
      </div>
    )
  }
}

export default withStyles(styles)(T10eDayHeader);