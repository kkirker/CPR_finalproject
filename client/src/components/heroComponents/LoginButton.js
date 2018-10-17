import styled from 'react-emotion'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const MainButtonStyle = styled('div')({
  height: '50px;',
  
})

function LoginButton(props) {
  const { classes } = props;
  return (
      <MainButtonStyle>
        <Link to='/signup'>
          <Button variant="contained" color="secondary" className={classes.button}>
            Register Today
          </Button>
        </Link>
      </MainButtonStyle>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);