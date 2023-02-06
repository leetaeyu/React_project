import "./Form.css"

const Form = ({value, inputChange, addTodo}) => {
    return (
        <div className="formWrap">
            <input type="text" value={value} onChange={inputChange} />
            <button onClick={addTodo}>ADD</button>
        </div>
    )
}
export default Form;