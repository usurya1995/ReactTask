import React, { Component } from 'react';

class First extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                <label>TACAS IP ADDRESS<i className="fa fa-asterisk"></i></label>
                                <br></br>
                                <input type="text"></input>
                                <br></br>
                                <label>KEY</label>
                                <br></br>
                                <input type="text"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default First;