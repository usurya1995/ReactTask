import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainPage.css';
import FooterComponent from './FooterComponent';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seventh from "./Seventh";

var data = require('./details.json');

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentLoad(evt){
        //alert(evt.target.value);
        switch(evt.target.value){
            case 0 : ReactDOM.render(<First/>, document.getElementById('Comp'));
                     break;
            case 1 : ReactDOM.render(<Second/>, document.getElementById('Comp'));
                     break;
            case 2 : ReactDOM.render(<Third/>, document.getElementById('Comp'));
                     break;
            case 3 : ReactDOM.render(<Fourth/>, document.getElementById('Comp'));
                     break;
            case 4 : ReactDOM.render(<Fifth/>, document.getElementById('Comp'));
                     break;
            case 5 : ReactDOM.render(<Sixth/>, document.getElementById('Comp'));
                     break;
            case 6 : ReactDOM.render(<Seventh/>, document.getElementById('Comp'));
                     break;
            default : return false;
        }
        
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
                                            return <li key={i} value={i} onClick={this.componentLoad.bind(this)}>{val}</li>
                                        })
                                    }
                                </ul>
                        </div> 
                        <div className="col-md-9" id="Comp">
                            
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
