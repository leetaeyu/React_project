import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
        const {todolist, onRemove, onToggle} = this.props;
        console.log(todolist);
        const todos = todolist.map(({id,text,checked}) => (
            <TodoItem id={id} text={text} check={checked} removeTodo={onRemove} toggleTodo={onToggle} />
        ))
        return(
        <div>
            {todos}
        </div>
        )
    }
}
export default TodoItemList;