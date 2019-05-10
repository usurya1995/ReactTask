import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" >
                            <div>
                                <img src="image1.png" alt="CISCO" className="img-size1"></img>
                                <button type="button" className="btn btn-info btnsty"><Link to="/">LOGOUT&nbsp;<i className="fa fa-sign-out"></i></Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderComponent;