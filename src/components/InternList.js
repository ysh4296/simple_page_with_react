import {Component} from "react";

class InternList extends Component {
    render(){
        var Interns = [];
        var data = this.props.data;
        var i = 0;
        for( ; i < data.length ; i++){
            Interns.push(
            <li>
                <a href="/"
                onClick = {function(id,e){
                    e.preventDefault();
                    this.props.onSelectIntern(id);
                }.bind(this,data[i].id)}
                >
                    {data[i].name}
                </a>
            </li>);
        }
        return (
            <ul>
                {Interns}
            </ul>
        );
    }
}
export default InternList;