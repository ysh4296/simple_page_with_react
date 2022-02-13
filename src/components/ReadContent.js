import {Component} from "react";
import InternList from "./InternList";
class ReadContent extends Component {
    render(){
        var data = this.props.internlist;
        var desc = null;
        console.log(this.props.index)
        if (this.props.index >= 0) desc = data[this.props.index].desc;
        console.log(desc)
        return (
            <article>
                <h2>{this.props.title}</h2>
                <InternList
                    data = {this.props.internlist}
                    onSelectIntern = {function(index){
                        this.props.onChangePage(index);
                    }.bind(this)}
                ></InternList>
                {desc}
            </article>
        );
    }
}
export default ReadContent;