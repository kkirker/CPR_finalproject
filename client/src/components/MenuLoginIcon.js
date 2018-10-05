import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function MenuLoginIcon(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Login
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
    </div>
  );
}

MenuLoginIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuLoginIcon);