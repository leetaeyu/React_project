import { Calendar } from "react-calendar";
import "./TodolistTemplate.css";
import "react-calendar/dist/Calendar.css";
const TodolistTemplate = ({form,children}) =>{
    return(
        <div className="todoWrap">
            <div>
                <Calendar />
            </div>
            <div className="wrapbox">
                <h1>TODAY TODOS</h1>
                <section className="two">{form}</section>
                <section>{children}</section>
            </div>
        </div>
    )
}

export default TodolistTemplate;