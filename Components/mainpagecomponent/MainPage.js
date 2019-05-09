import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainPage.css';
import HeaderComponent from './../headercomponent/HeaderComponent'
import FooterComponent from './../footercomponent/FooterComponent';
import First from './../firstcomponent/First';
import Second from './../secondcomponent/Second';
import Third from './../thirdcomponent/Third';
import Fourth from './../fourthcomponent/Fourth';
import Fifth from './../fifthcomponent/Fifth';
import Sixth from './../sixthcomponent/Sixth';
import Seventh from "../seventhcomponent/Seventh";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
//import Sample from './../samplecomponent/Sample';

var data = require('./../../JSON/components.json');

const routing2 = (
    <Router history={history}>
        <Switch>
            <Route path="/home/First" component={First} />
            <Route path="/home/Second" component={Second} />
            <Route path="/home/Third" component={Third} />
            <Route path="/home/Fourth" component={Fourth} />
            <Route path="/home/Fifth" component={Fifth} />
            <Route path="/home/Sixth" component={Sixth} />
            <Route path="/home/Seventh" component={Seventh} />
        </Switch>
    </Router>
)

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: data
        }
    }
    componentLoad(evt) {
        this.props.history.push(`/home/${evt.target.getAttribute('value')}`);
        // console.log(evt.target.getAttribute('value'));
        // var CompLoad = evt.target.getAttribute('value');
        ReactDOM.render(routing2, document.getElementById('Comp'));
        //ReactDOM.render(<Sample greeting={CompLoad}/>, document.getElementById('Comp'));
        // switch (evt.target.value) {
        //     case 0: ReactDOM.render(<First />, document.getElementById('Comp'));
        //     break;
        //     case 1: ReactDOM.render(<Second />, document.getElementById('Comp'));
        //     break;
        //     case 2: ReactDOM.render(<Third />, document.getElementById('Comp'));
        //     break;
        //     case 3: ReactDOM.render(<Fourth />, document.getElementById('Comp'));
        //     break;
        //     case 4: ReactDOM.render(<Fifth />, document.getElementById('Comp'));
        //     break;
        //     case 5: ReactDOM.render(<Sixth />, document.getElementById('Comp'));
        //     break;
        //     case 6: ReactDOM.render(<Seventh />, document.getElementById('Comp'));
        //     break;
        //     default: return false;
        // }

    }
    componentWillMount() {
        //console.log(this.state.datas);
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <HeaderComponent></HeaderComponent>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 bordersLeft">
                            {

                                <ul>
                                    {
                                        this.state.datas.map((val, i) => {
                                            return <li key={i} value={val.Component} onClick={this.componentLoad.bind(this)}>{val.Title}<img src="tick.png" alt="TICK" className="tick"></img></li>
                                        })
                                    }
                                </ul>
                            }
                        </div>
                        <div className="col-md-10 bordersRight" id="Comp">

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

