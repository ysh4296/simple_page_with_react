import {Component} from "react";

class HeadLine extends Component {
    render(){
        return (
            <header>
                <h1>
                    <a href="/"
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("start");
                        }.bind(this)}>
                        {this.props.title}
                    </a>
                </h1>
                {this.props.sub}
                <ul>
                    <li>
                        <a href="/"
                            onClick={function(e){
                                e.preventDefault();
                                this.props.onChangeMode("read");
                            }.bind(this)}>
                            {this.props.listname}
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           onClick={function(e){
                               e.preventDefault();
                               this.props.onChangeMode("create");
                           }.bind(this)}>
                            추가
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           onClick={function(e){
                               e.preventDefault();
                               this.props.onChangeMode("update");
                           }.bind(this)}>
                            수정
                        </a>
                    </li>
                    <li>
                        <a href="/"
                           onClick={function(e){
                               e.preventDefault();
                               this.props.onChangeMode("delete");
                           }.bind(this)}>
                            삭제
                        </a>
                    </li>
                </ul>
            </header>
        );
    }
}

export default HeadLine;