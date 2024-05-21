import React from "react";
const ListGroupItem = ({ todo, removeTodo, editTodo }) => {
    return (
        <li className="list-group-item">
            <h1 className="display-6">{todo.text}</h1>
            <span className="float-end">
                <button className="btn btn-warning rounded-0 btn-sm" onClick={() => editTodo(todo)}>Edit</button>
                &nbsp;
                <button className="btn btn-danger rounded-0 btn-sm" onClick={() => removeTodo(todo.id)}>Delete</button>
            </span>
        </li>
    );
};

export default ListGroupItem;