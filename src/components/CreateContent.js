import {Component} from "react";

class CreateContent extends Component {
    render(){
        return (
            <article>
                <h2>{this.props.title}</h2>
                <form
                    action = "create_process/"
                    method = "post"
                    onSubmit = {function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            this.props.data.length,
                            e.target.name.value,
                            e.target.description.value
                    );
                    alert("추가");
                }.bind(this)}
                >
                    <p>
                        <input
                            type = "text"
                            name = "name"
                            placeholder = "name"
                        >
                        </input>
                    </p>
                    <p>
                        <input
                            type = "text"
                            name = "description"
                            placeholder = "description"
                        >
                        </input>
                    </p>
                    <p>
                        <input
                            type = "submit"
                        >
                        </input>
                    </p>
                </form>
            </article>
        );
    }
}
export default CreateContent;