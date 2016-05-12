import React from 'react';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Snackbar from 'react-toolbox/lib/snackbar';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.createUser = this.createUser.bind(this);
  }

  createUser(e) {
    e.preventDefault();
    e.stopPropagation();
    const { create } = this.props;
    const { email, password } = this.state;

    create(email, password);

    this.setState({ email: '', password: '' });
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }


  renderError() {
    if (this.props.error) {
      return (<Snackbar
        action="Dismiss"
        active={true}
        icon="question_answer"
        label={this.props.error}
        timeout={1000}
        ref="snackbar"
        onTimeout={() => {
          console.log('onTimeout', this);
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
  }

  render() {
    return (<div>
      <h5>Register</h5>
      {this.renderError()}
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
        <Button icon="input" label="Submit" raised primary onClick={this.createUser}/>
      </form>
    </div>);
  }
}

NewUser.propTypes = {
  create: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default NewUser;
