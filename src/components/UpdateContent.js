import {Component} from "react";
import InternList from "./InternList";

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            desc:""
        }
        if(this.props.index != -1){
            this.state.name = this.props.internlist[this.props.index].name;
            this.state.desc = this.props.internlist[this.props.index].desc;
        }
    }
    render(){
        var Update_Form = null;
        if(this.props.index > -1){
            console.log("hi")
            //this.setState({desc:this.props.internlist[this.props.index].desc});

            console.log(this.state.desc)
            Update_Form =
                [<form
                action = "update_process/"
                method = "post"
                onSubmit = {function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            this.props.index,
                            e.target.name.value,
                            e.target.description.value
                        );
                }.bind(this)}
            >
                <p>
                    <input
                        type = "text"
                        name = "name"
                        value={this.state.name}
                        onChange={function(e){
                            this.setState({name : e.target.value});
                            console.log(this.state.name)
                        }.bind(this)}
                    >
                    </input>
                </p>
                <p>
                    <input
                        type = "text"
                        name = "description"
                        value={this.state.desc}
                        onChange={function(e){
                            this.setState({desc : e.target.value});
                        }.bind(this)}
                    >
                    </input>
                </p>
                <p>
                    <input
                        type = "submit"
                    >
                    </input>
                </p>
            </form>];
            console.log(Update_Form);
        }
        return (
            <article>
                <h2>{this.props.title}</h2>
                <InternList
                    data = {this.props.internlist}
                    onSelectIntern = {function(index){
                        this.props.onChangePage(index);
                        }.bind(this)}
                ></InternList>
                {Update_Form}
            </article>
        );
    }
}
export default UpdateContent;