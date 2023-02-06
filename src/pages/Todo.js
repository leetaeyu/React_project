import {Component} from "react";
import TodolistTemplate from "../component/TodolistTemplate";
import TodoItemList from "../component/TodoItemList";
// import logo from './logo.svg';
import './todo.css';
import Form from "../component/Form";;
class Todo extends Component{
    //1. 변수 선언
    id=3;
    state={
        input:"",
        count:0,
        todos:[
            {id:0,text:"자바스크립트 공부하기",checked:false},
            {id:1,text:"리액트 공부하기",checked:false},
        ]
    }
    //2. 메서드 선언
    handleRemove = (id) => {
        const {todos}= this.state;
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];
        if(selected.checked === true) {
            this.setState({
                count:this.state.count-1
            })
        }else{
            this.setState({
                count:this.state.count+1
            })
        }
        this.setState({
            todos:this.state.todos.filter(todo => todo.id != id)
        })
    }
    handleChange = (e) => {
        this.setState({
            input:e.target.value
        })
    }
    handleAdd = () => {
        const {input,todos} = this.state;
        this.setState({
            input:"",
            todos:todos.concat({
                id:this.id++,
                text:input,
                checked:false
            })
        })
    }
    handleToggle = (id) => {
        console.log("toggle");
        const {todos} = this.state;
        //매개변수로 넘어온 id가 몇번째 아이템인지 찾기
        //findIndex 
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];
        //배열 복사하기 spread연산자
        const copytodos = [...todos];
        console.log(copytodos);
        copytodos[index]={
            ...selected,
            checked : !selected.checked
        }
        if(selected.checked === true) {
            this.setState({
                count:this.state.count-1
            })
        }else{
            this.setState({
                count:this.state.count+1
            })
        }
        this.setState ({
            todos:copytodos
        })
    }
    //3. 붙일내용
    render(){
        const {input,todos,count} = this.state;
        return(
            <div className="innerBox innerBoxTodo">
                <div className="header">TODO : {todos.length} / DELETE : {count} / REMIND : {todos.length - count} </div>
                <TodolistTemplate form={(<Form value={input}
                    inputChange={this.handleChange}
                    addTodo={this.handleAdd} />)}>
                    <TodoItemList todolist={todos}
                     onRemove={this.handleRemove}
                     onToggle={this.handleToggle} />
                </TodolistTemplate>
            </div>
        )
    }
}

export default Todo;
