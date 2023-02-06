import { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component{
    render(){
        const {id,text,check,removeTodo,toggleTodo} = this.props;
        return(
            <div className="todoItem">
                <div className="remove" onClick={()=>removeTodo(id)}>X</div>
                <div className={check ? "checked":""} onClick={()=>{toggleTodo(id)}}>{text}</div>
            </div>
        )
    }
}
export default TodoItem;