import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
const Home = () => {
        const [todo, setTodo] = useState("");
        const [listTodo, setListTodo] = useState([{
                id: "Todo1",
                name: "Watching youtube"
            },
            {
                id: "Todo2",
                name: "Using facebook"
            },
            {
                id: "Todo3",
                name: "Reading book"
            },
        ])
        const randomId = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        const handleClickBtn = () => {
            if (!todo) {
                alert("Todo's name is not empty")
                return;
            }
            let todoId = randomId(4, 99999999999999999999);
            let todoItem = {
                    id: `todo${todoId}`,
                    name: todo
                }
                // cách 1: setListTodo([...listTodo,todoItem])

            let currentTodo = _.clone(listTodo);
            currentTodo.push(todoItem);
            setListTodo(currentTodo);
            setTodo("")
        }
        const handleDeleteTodo = (id) => {
            let currentTodo = _.clone(listTodo);
            //c1 viết tắt
            //currentTodo = currentTodo.filter(item => item.id !== id)
            //c2 viết đầy đủ
            currentTodo = currentTodo.filter(item => {
                if (item.id !== id)
                    return item;
            })
            setListTodo(currentTodo)
        }
        console.log(listTodo)
    return (
        <div >
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClickBtn = {handleClickBtn}
            />
            
            <DisplayTodo
                listTodo={listTodo}
                handleDeleteTodo = {handleDeleteTodo}
            />
        </div>
        );
    }
    // class Home extends React.Component{
    //     state = {
    //         name: "Lê Mạnh Tiến",
    //     }
    //     render() {
    //         return (
    //             <div>
    //                 <label>Name</label>
    //                 <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
    //                 <br /><br />
    //                 Hello Todo List class name = {this.state.name}
    //             </div>  
    //         );
    //     }
    // }
export default Home;