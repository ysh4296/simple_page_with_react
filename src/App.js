import React,{ Component } from "react";
import HeadLine from "./components/HeadLine";
import InternList from "./components/InternList";
import Content from "./components/Content";
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            HeadLine:{Title:"인턴 명단",Sub:"인턴의 명단입니다."},
            InternList:{},
            content:{}
        }
    }
    render(){
        return (
        <div className="App">
            <HeadLine Title={this.state.HeadLine.Title} Sub={this.state.HeadLine.Sub}></HeadLine>
            <InternList data = {this.state.InternList}></InternList>
            <Content data = {this.state.content}></Content>
        </div>
        );
    }
}
export default App;
