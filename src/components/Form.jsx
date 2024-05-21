import React, { useEffect, useState } from "react";
const Form = ({ addTodo, edit }) => {

    const [text, setText] = useState(" ")
    const handlesumbit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText(" ");
    }

    useEffect(() => {
        setText(edit.todos.text);
    }, [edit]);

    return (
        <form className="my-3" onSubmit={(e) => handlesumbit(e)}>
            <input type="text" className="form-control rounded-0 my-2" value={text} onChange={(e) => setText(e.target.value)} required />
            <button className="btn btn-success rounded-0 w-100">Save</button>
        </form>
    );

};
export default Form;