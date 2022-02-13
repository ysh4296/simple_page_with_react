import {Component} from "react";

class InternList extends Component {
    render(){
        console.log("render list")
        var Interns = [];
        var data = this.props.data;
        console.log(data.length);
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