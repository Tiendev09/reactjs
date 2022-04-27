
const AddTodo = (props) => {
    const { todo, setTodo, handleClickBtn } = props;
    return (
        <div>
            <label > Todo 's Name</label> <input type = "text"
            value = { todo }
            onChange = {
                (event) => setTodo(event.target.value) }
            />
            <button type = "button"
            onClick = {
                    () => handleClickBtn()} > Submit </button>
                <br /> < br />
        </div>
    )
}
export default AddTodo;