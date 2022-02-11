import {Component} from "react";

class InternList extends Component {
    render(){
        var Interns = [];
        var data = this.props.data;
        for(var i = 0 ; i < data.length ; i++){
            Interns.push(<li><a>data[i].name</a></li>)
        }
        return (
            <nav>
                <ul>
                    {Interns}
                </ul>
            </nav>
        );
    }
}
export default InternList;