import React from "react";
import ListGroupItem from "./ListGroupItem";
const ListGroup = ({ todos, removeTodo, editTodo }) => {

    if (todos.length === 0) {
        return (
            <h1 className="text-center my-3 display-6">Not Todos Yet...</h1>
        )
    }


    return (
        <ul className="list-group rounded-0 my-3">
            {
                todos.map((todo) => {
                    return <ListGroupItem key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
                })
            }
        </ul>
    );
};

export default ListGroup;