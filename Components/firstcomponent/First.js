import React, { Component } from 'react';
import './First.css';
import './../mainpagecomponent/MainPage.css';
var Address4 = require('ip-address').Address4;

class First extends Component {
    constructor(props) {
        super(props);
        this.state={
            ip : "",
            keys : ""
        }
    }

    handleIP(e){
        this.setState({ ip: e.target.value });
    }

    handleKey(e){
        this.setState({ keys: e.target.value });
        //this.state.keys = e.target.value;
    }

    handleClear(){
        this.setState({ 
            ip: "",
            keys: ""
         });
         document.getElementsByClassName("tick")[0].style.display="none";
    }

    onSub(e){
        var address = new Address4(this.state.ip);

        //alert(address.isValid());
        if(!address.isValid()){
            alert("Please enter valid ip address");
            e.preventDefault();
            return false;
        }
          
        if(isNaN(this.state.keys) || this.state.keys==""){
            alert("Please enter only number");
            e.preventDefault();
            return false;
        }

        if(address.isValid() && !isNaN(this.state.keys)){
            document.getElementsByClassName("tick")[0].style.display="block";
            e.preventDefault();
        }

        // if((this.state.ip.length != 0) && (this.state.keys.length != 0)){
        //     document.getElementsByClassName("tick")[0].style.display="block";
        //     e.preventDefault();
        // }
        // else
        // {  
        //     document.getElementsByClassName("tick")[0].style.display="none";
            
        // }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="spaceTop" onSubmit={this.onSub.bind(this)}>
                                <label>TACAS IP ADDRESS<i className="fa fa-asterisk asterisk"></i></label>
                                <br></br>
                                <input type="text" className="form-control" value={this.state.ip} onChange={this.handleIP.bind(this)} placeholder="Input a Site Profile name"></input>
                                <br></br>
                                <label>KEY</label>
                                <br></br>
                                <input type="text" className="form-control" value={this.state.keys} onChange={this.handleKey.bind(this)} placeholder="Enter Key"></input>
                                <br></br>
                                <div className="btndir">
                                    <button type="submit" className="btn btn-info">Save</button>
                                    <button className="btn btn-danger" type="button" onClick={this.handleClear.bind(this)}>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default First;