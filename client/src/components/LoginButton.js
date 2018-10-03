import styled from 'react-emotion'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function LoginButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Login/Register</Button>
    </div>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);