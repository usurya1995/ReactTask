import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        }
    }

    getDate() {
        var date =  new Date().toLocaleString();

        this.setState({
            date: date
        });
    }

    componentDidMount() {
        this.getDate();
    }

    render() {
        return (
            <div style={{marginTop:"15px"}}>
                <p>Copyrights <span><i className="fa fa-copyright"></i></span> Reserved by CISCO
                <span style={{float:"right"}}>Last Updated:{this.state.date}</span></p>
            </div>
        );
    }
}

export default FooterComponent;