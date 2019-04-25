import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
var data = require('./details.json');

class MainPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div>
                    <p>Main Page</p>
                    <p>Welcome to:{this.props.match.params.username}</p>
                    <div className="mainPage">
                        {/* <p>{data.name}</p> */}
                        <ul>
                            {
                                data[0].name.map((val,i) => {
                                    return <li key={i}>{val}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}
export default MainPage;