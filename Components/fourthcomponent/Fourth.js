import React, { Component } from 'react';
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './../mainpagecomponent/MainPage.css';
import './Fourth.css';
var data = require("./../../JSON/drop.json");

class Fourth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip : "",
            mode : "",
            uname: "",
            mode1: "",
            authtype: "",
            authpsw: "",
            privacytype:"",
            privacypsw:""
        }
    }

    handleIP(e){
        this.setState({ ip: e.target.value });
    }

    handleMode(e){
        this.setState({ mode: e.target.value });
    }

    onSub(){
        if((this.state.ip.length != 0) && (this.state.mode != "")){
            document.getElementsByClassName("tick")[3].style.display="block";
        }
        else
        {  
            document.getElementsByClassName("tick")[3].style.display="none";
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="spaceTop">
                                <label>TRAP REFLECTION DESTINATION IP</label>
                                <br></br>
                                <input type="text" className="form-control" placeholder="e.g.111.111.1.1" onChange={this.handleIP.bind(this)} onInput={this.onSub.bind(this)}></input>
                                <br></br>
                                <select className="form-control" onClick={this.handleMode.bind(this)} onInput={this.onSub.bind(this)}>
                                    <option>Select Mode</option>
                                    {
                                        data.map((t, i) => <option key={i} value={t.value}>{t.name}</option>)
                                    }
                                </select>
                            </form>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">

                        <div className="col-md-12">

                            <Accordion allowZeroExpanded="true">
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            ADVANCED CONFIGURATION OPTIONS
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>

                                        <div className="row accordian">
                                            <div className="col-md-6">
                                                <form>
                                                    <label>Username</label>
                                                    <br></br>
                                                    <input type="text" className="form-control"></input>
                                                </form>
                                            </div>
                                            <div className="col-md-6">
                                                <form>
                                                    <label>Mode</label>
                                                    <br></br>
                                                    <select className="form-control">
                                                        <option>USER</option>
                                                        <option>NON USER</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Authentication Type</label>
                                                <br></br>
                                                <select className="form-control">
                                                    <option>USER</option>
                                                    <option>NON USER</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Authentication Password</label>
                                                <br></br>
                                                <input type="password" className="form-control"></input>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Privacy Type</label>
                                                <br></br>
                                                <select className="form-control">
                                                    <option>USER</option>
                                                    <option>NON USER</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Privacy Password</label>
                                                <br></br>
                                                <input type="password" className="form-control"></input>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Fourth;
