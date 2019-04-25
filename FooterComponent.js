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
            <div>
                <p>{this.state.date}</p>
            </div>
        );
    }
}

export default FooterComponent;