import React from 'react';
import styled from 'react-emotion'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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

const ButtonStyle = styled('div')({
    
  })



function MenuLoginIcon(props) {
  const { classes } = props;
  return (
    <ButtonStyle>
      <Button variant="contained" color="primary" className={classes.button}>
        Login
        {/* <Icon className={classes.rightIcon}>send</Icon> */}
      </Button>
    </ButtonStyle>
  );
}

MenuLoginIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuLoginIcon);