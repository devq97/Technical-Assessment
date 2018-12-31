import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, TextInput } from "react-bootstrap";
import "./Login.css";
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch ({
      type: 'SIGN_IN',
      payload: {
        email: this.state.email,
        password: this.state.password
      }
    })
    console.log(this.state.email);
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <Button
            bsStyle="primary"
            block
            bsSize="xsmall"
          >
            No has iniciado sesión
          </Button>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    Users: state.Users
  }
}

export default connect()(Login);
