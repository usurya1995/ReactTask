import React, { Component } from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';

class Second extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Second Component</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Second;