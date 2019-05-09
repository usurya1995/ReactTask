import React, { Component } from 'react';
import FooterComponent from './../footercomponent/FooterComponent';
import './Login.css';
var data = require('./../../JSON/login.json');

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
      //this.props.history.push(`/home/${this.state.user}`);
      
         //---OLD---
      // if(this.state.user != "" && this.state.pass != ""){
      //    this.props.history.push(`/home`);
      // }
      // else{
      //    alert("Please Enter Details");
      //    e.preventDefault();
      // }

      if(data[this.state.user]!= undefined){
         if(data[this.state.user] == this.state.pass){
            this.props.history.push(`/home`);
         }
      }
      else{
         alert("User Not Found");
         this.setState({"user": "","pass":""});
         document.getElementsByName("username")[0].value = "";
         document.getElementsByName("password")[0].value = "";
         e.preventDefault();
      }
   }

   render() {
      return (
         <div>
            <div className="container-fluid">
            <div className="row bgimgs">
               <div className="col-md-4">
                  
               </div>
               <div className="col-md-4 borsty">
                  {/* <h1>LOGIN</h1> */}
                  <img src="image1.png" alt="CISCO" className="img-size"></img>
                  <form onSubmit={this.updateDetails} className="login-form">
                     <label>Username:</label>
                     <input type="text" className="form-control" name="username" value={this.state.user} onChange={this.updateUser}/><br />
                     <label>Password:</label>
                     <input type="password" className="form-control" name="password" value={this.state.pass} onChange={this.updatePass}/><br />
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