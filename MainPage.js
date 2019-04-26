import React, { Component } from 'react';
import './MainPage.css';
import FooterComponent from './FooterComponent';
var data = require('./details.json');

class MainPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Main Page</p>
                            <p>Welcome to:{this.props.match.params.username}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            {/* <p>{data.name}</p> */}
                                <ul>
                                    {
                                        data[0].name.map((val, i) => {
                                            return <li key={i}>{val}</li>
                                        })
                                    }
                                </ul>
                        </div> 
                        <div className="col-md-9">
                            <form>
                                <label>TACAS IP ADDRESS<i className="far fa-asterisk"></i></label>
                                <br></br>
                                <input type="text"></input>
                                <br></br>
                                <label>KEY</label>
                                <br></br>
                                <input type="text"></input>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <FooterComponent></FooterComponent>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainPage;
