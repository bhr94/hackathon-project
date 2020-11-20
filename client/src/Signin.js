import React from "react";

class Signin extends React.Component {
  state = {
      email:"",
      password:""
  };

  updateEmail = () => {};
  updatePassword =() =>{}
  handleClick = () => {
    alert("hello");
  };

  render() {
    return (
      <form>
        <h2>SIGN IN</h2>
        <div>
          Email:{" "}
          <input
            type="text"
            name="email"
            onChange={this.updateEmail}
            value={this.state.email}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            name="password"
            onChange={this.updatePassword}
            value={this.state.password}
          />
        </div>
        <button type="button" onClick={this.handleClick}>
          Sign In
        </button>
      </form>
    );
  }
}

export default Signin;
