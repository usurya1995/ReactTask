import React, { Component } from 'react';
import './Login.css';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         user: "",
         pass: "",
         errors: {}
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
      e.preventDefault();
      alert("Username:" + this.state.user + "," + "Password" + this.state.pass);
   }

   render() {
      return (
         <div>
            <div className="row">
               <div className="col-md-4"></div>
               <div className="col-md-4">
                  <h1>Login</h1>
                  <form onSubmit={this.updateDetails} className="login-form">
                     <label>Username:</label>
                     <input type="text" className="form-control" value={this.state.user} onChange={this.updateUser} /><br />
                     <label>Password:</label>
                     <input type="password" className="form-control" value={this.state.pass} onChange={this.updatePass} /><br />
                     <input type="submit" value="Submit" />
                  </form>
               </div>
               <div className="col-md-4"></div>
            </div>
         </div>
      );
   }
}
export default App;