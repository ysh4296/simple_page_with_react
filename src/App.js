import React,{ Component } from "react";
import HeadLine from "./components/HeadLine";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode: "start",
            content_title: "",
            show_intern_index:-1,
            headline: {title: "인턴 명단", sub: "인턴의 명단을 관리합니다."},
            internlist: []
        }
    }
    getContent(){
        var _article = null;
        if(this.state.mode === "start"){
            this.state.content_title = "목록에서 메뉴를 선택해주세요"
        } else if (this.state.mode === "read"){
            this.state.content_title = "확인할 인턴을 선택하세요"
            _article =
                <ReadContent
                    title = {this.state.content_title}
                    internlist = {this.state.internlist}
                    index = {this.state.show_intern_index}
                    onChangePage={function(index){
                        this.setState({show_intern_index:index});
                    }.bind(this)}
                >
                </ReadContent>
        } else if (this.state.mode === "create"){
            this.state.content_title = "새로운 인턴을 추가하세요"
            _article =
                <CreateContent
                    title = {this.state.content_title}
                    data = {this.state.internlist}
                    onSubmit={function(id,name,desc){
                        //add intern
                        var _internlist = this.state.internlist.concat(
                            {
                                id:id,
                                name:name,
                                desc:desc
                            }
                        );
                        this.setState({
                            internlist:_internlist
                        })
                    }.bind(this)}
                >
                </CreateContent>
        } else if (this.state.mode === "update"){
            this.state.content_title = "인턴의 정보를 수정하세요"
            _article = <UpdateContent
                title = {this.state.content_title}
                internlist = {this.state.internlist}
                index = {this.state.show_intern_index}
                onSubmit={function(id,name,desc){
                //update intern
                var _internlist = Array.from(this.state.internlist);
                _internlist[id] = {
                    id:id,
                    name:name,
                    desc:desc
                }
                this.setState({
                    internlist:_internlist
                })
            }.bind(this)}
            onChangePage={function(index){
                this.setState({show_intern_index:index});
            }.bind(this)}
            >
            </UpdateContent>
        } else if (this.state.mode === "delete"){
            var _internlist = []
            this.setState({
                mode:"start",
                internlist:_internlist
            });
        }
        return _article;
    }

    render(){
        return (
            <div className="App">
                <HeadLine
                    title={this.state.headline.title}
                    sub={this.state.headline.sub}
                    listname={this.state.headline.title}
                    onChangeMode={function(mode){
                        this.setState({mode:mode, show_intern_index:-1});
                    }.bind(this)}
                >
                </HeadLine>
                {this.getContent()}
            </div>
        );
    }
}
export default App;
