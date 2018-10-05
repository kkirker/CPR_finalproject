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

const buttonStyle = styled('div')({
  display: 'flex',
  
})

function LoginButton(props) {
  const { classes } = props;
  return (
      <buttonStyle>
          <Button variant="contained" color="secondary" className={classes.button}>
          Login / Register
        </Button>
    </buttonStyle>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);