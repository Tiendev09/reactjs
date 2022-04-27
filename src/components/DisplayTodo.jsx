
const DisplayTodo = (props) => {
    
    const handleDeleteTodo = (id) => {
        props.handleDeleteTodo(id);
    }
    const listTodo = props.listTodo;
    return (
        <div>
            <div>List Todo: </div>
            {listTodo.map((item,index) => {
                return (
                    <div key={item.id} onClick={()=>handleDeleteTodo(item.id)}>{item.name}</div>
                )
            })}
        </div>                     
    )
}
export default DisplayTodo;