import React from "react";

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleClick = () => {
    alert("hello");
  };

  render() {
    return (
      <form className="signin-form">
        <h2 className="signin-form__title">SIGN IN</h2>

        <label className="form__label-email">Email</label>
        <input
          type="text"
          name="email"
          onChange={this.updateEmail}
          value={this.state.email}
          className="form__name-input"
          placeholder="Enter your email"
        />

        <label className="form__label-password">Password</label>
        <input
          type="password"
          name="password"
          onChange={this.updatePassword}
          value={this.state.password}
          className="form__password-input"
          placeholder="Enter your password"
        />

        <button
          type="button"
          onClick={this.handleClick}
          className="form__submit-button"
        >
          Sign In
        </button>
      </form>
    );
  }
}

export default Signin;
