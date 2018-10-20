import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  container: {

  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function TestStartButton(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
    <div className='test-text-container'>
    <h1 className='red-h1'>Congratulations! You can now take the Exam.</h1>
      <p>A passing grade is 70% or higher. Just a reminder, if you happen to fail don’t worry there’s unlimited Testing. Just     re-examine &amp; retry. Good luck!</p>
    </div>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" onClick={props.handleClick} color="primary" className={classes.margin}>
          Start Exam
        </Button>
      </MuiThemeProvider>
    </div>
  );
}

TestStartButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestStartButton);