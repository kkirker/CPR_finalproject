import React, { Component } from 'react';

import { auth } from '../../firebase';
import styled from 'react-emotion'
import Button from '@material-ui/core/Button';

const StyledInput = styled('input')({
  display: 'block',
  marginBottom: '10px',
  width: '365px',
  maxWidth: '100%',
  borderRadius: '2px',
  border: '1px solid silver',
  background: '#FFFFFF',
  fontSize: '15px',
  padding: '4px'
})


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
      <label for="new-password">New Password *</label><br />
        <StyledInput
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
        />
        <label for="confirm-new-password">Confirm New Password *</label><br />
        <StyledInput
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
        />
        <Button disabled={isInvalid} type="submit" variant="contained" color="secondary">
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;