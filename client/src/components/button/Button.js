import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from "react-emotion";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


function ContainedButtons(props) {
  const { classes, href, color ,Name} = props;
  return (
    <div>

      <Button variant="contained" color = {color} href={href} className={classes.button}>
        {Name}
      </Button>
      
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);