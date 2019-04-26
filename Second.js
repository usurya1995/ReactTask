import React, { Component } from 'react';

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
                            <h1>Second Component</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Second;