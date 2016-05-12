import React from 'react';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Snackbar from 'react-toolbox/lib/snackbar';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  login(e) {
    e.preventDefault();
    e.stopPropagation();

    const { loginUser } = this.props;
    const { email, password } = this.state;

    loginUser(email, password);

    this.setState({ email: '', password: '' });
  }

  renderError() {
    if (this.props.error) {
      return (<Snackbar
        action="Dismiss"
        active
        icon="question_answer"
        label={this.props.error}
        timeout={1000}
        ref="snackbar"
        onTimeout={() => {
          this.refs.snackbar.setState({
            ...this.refs.snackbar.state,
            active: false,
          });
        }}
        onClick={() => {
          this.refs.snackbar.setState({
            ...this.refs.snackbar.state,
            active: false,
          });
        }}
        type="cancel"
      />);
    }
    return '';
  }

  render() {
    return (<section>
      {this.renderError()}
      <h5>Login</h5>
      <form>
        <Input
          type="email"
          label="Email address"
          icon="email"
          value={this.state.email}
          onChange={this.handleChange.bind(this, 'email')}
        />
        <Input
          type="password"
          label="Password"
          icon="vpn_key"
          value={this.state.password}
          onChange={this.handleChange.bind(this, 'password')}
        />
        <Button icon="input" label="Submit" raised primary onClick={this.login} />
        <Button icon="input" label="Register" href="/register" />
      </form>
    </section>);
  }

}

Login.propTypes = {
  loginUser: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default Login;
