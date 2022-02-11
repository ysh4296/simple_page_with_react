import {Component} from "react";

class HeadLine extends Component {
    render(){
        return (
            <header>
                <h1>{this.props.Title}</h1>
                {this.props.Sub}
            </header>
        );
    }
}

export default HeadLine;