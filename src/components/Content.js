import {Component} from "react";

class Content extends Component {

    render(){
        var desc = [];
        var data = this.props.data;
        for(var i = 0 ; i < data.length ; i++){
            desc.push(<li>data[i].desc</li>)
        }
        return (
            <article>
                <h2>설명 , 특징</h2>
                <ul>
                    {desc}
                </ul>
            </article>
        );
    }
}
export default Content;