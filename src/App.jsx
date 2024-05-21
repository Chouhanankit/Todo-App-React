import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {

    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState({
        todos: {},
        isEdit: false,
    });


    const removeTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    }

    const addTodo = (text) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text,
        }
        setTodos([newTodo, ...todos]);
    };

    const editTodo = (oldtodos) => {
        setEdit({
            todos: oldtodos,
            isEdit: true,
        });
    };

    const updateTodo = (oldId, newText) => {
        setTodos(
            todos.map((item) => item.id === oldId ? { id: oldId, text: newText } : item)
        )
    };

    return (
        <>
            <Navbar />
            <div className="container p-5">
                <h1 className="display-1 my-2 text-center"></h1>
                <Form addTodo={addTodo} edit={edit} />
                <ListGroup todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
            </div>
        </>
    );
};

export default App;


