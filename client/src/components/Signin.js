import React from "react";
import axios from "axios";
import Profile from "./Profile";

const main_url = "http://localhost:5000";

class Signin extends React.Component {
  state = {
    data: {},
    email: "",
    password: "",
    signedIn:false,
  };


  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleClick = () => {
     if(this.state.email && this.state.password) {
         axios.post(main_url + "/signin")
         .then(response =>{
             console.log(response);
             this.setState({signedIn:true})
         })
         .catch(error=>{
             console.log(error)
         })
         this.setState({email:""});
         this.setState({password:""})
     }
     else {
         alert("please fill all the required fields")
     }
  };

  render() {
    return (
      (!this.state.signedIn)?
        <form className="signin-form">
          <h2 className="signin-form__title">SIGN IN</h2>

          <label className="form__label-email">Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.updateEmail}
            value={this.state.email}
            className="form__name-input"
            defaultValue="Enter your email"
          />

          <label className="form__label-password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={this.updatePassword}
            value={this.state.password}
            className="form__password-input"
            defaultValue="Enter your password"
          />

          <button
            type="button"
            onClick={this.handleClick}
            className="form__submit-button"
          >
            Sign In
          </button>
        </form>
        :
        <Profile data={this.state.data} />
    
        )
      
  }
}

export default Signin;
