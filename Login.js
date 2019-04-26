import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import './Login.css';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: "",
         pass: ""
      }
      this.updateUser = this.updateUser.bind(this);
      this.updatePass = this.updatePass.bind(this);
      this.updateDetails = this.updateDetails.bind(this);
   }

   updateUser(e) {
      this.setState({ user: e.target.value });
   }

   updatePass(e) {
      this.setState({ pass: e.target.value });
   }

   updateDetails(e) {
      //e.preventDefault();
      //alert("Username:" + this.state.user + "," + "Password:" + this.state.pass);
      this.props.history.push(`/home/${this.state.user}`);
   }

   render() {
      return (
         <div>
            <div className="container-fluid">
            <div className="row">
               <div className="col-md-4">
                  <img src="image1.png" alt="CISCO" className="img-size"></img>
               </div>
               <div className="col-md-4">
                  <h1>LOGIN</h1>
                  <form onSubmit={this.updateDetails} className="login-form">
                     <label>Username:</label>
                     <input type="text" className="form-control" value={this.state.user} onChange={this.updateUser} required/><br />
                     <label>Password:</label>
                     <input type="password" className="form-control" value={this.state.pass} onChange={this.updatePass} required/><br />
                     <input type="submit" value="Submit" />
                  </form>
               </div>
               <div className="col-md-4"></div>
            </div>
            <footer>
                  <FooterComponent></FooterComponent>
            </footer>
            </div>
         </div>
      );
   }
}
export default Login;
