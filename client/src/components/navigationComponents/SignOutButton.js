import React from 'react';
import styled from 'react-emotion'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import * as routes from '../../constants/routes';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase';




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

// handleOnClick = (event) => {
//   return (
//     <Link to={routes.SIGNIN} />
//   )
// }



function SignOutButton (props) {
  const { classes } = props;


  return (
    <ButtonStyle>
      <Link to='/signin'>
      <Button variant="contained" color="primary" className={classes.button} onClick={auth.doSignOut}>
        Sign Out
      </Button>
      </Link>
    </ButtonStyle>
  );
}

SignOutButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignOutButton);