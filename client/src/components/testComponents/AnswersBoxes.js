import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const INITIAL_STATE = {
  value : '',
};

class RadioButtonsGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
  }
  };

  handleChange = event => {
    this.setState({ value: event.target.value }, () => {
      console.log(this.state.value);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{this.props.question}</FormLabel>
          <RadioGroup
            aria-label="CPRTest"
            name="CPRTest"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="A" control={<Radio />} label={this.props.options.A} />
            <FormControlLabel value="B" control={<Radio />} label={this.props.options.B} />
            <FormControlLabel value="C" control={<Radio />} label={this.props.options.C} />
            <FormControlLabel value="D" control={<Radio />} label={this.props.options.D} />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);