import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});

function Dividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Divider />
    </div>
  );
}

Dividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dividers);