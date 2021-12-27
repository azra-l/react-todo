import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

const EditTodoForm = (props) => {
    const {task, id, editTodo, toggleIsEditing} = props;

    const [value, handleChange, reset] = useInputState(task);

    const handleEdit = (e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
    }

    return(
        <form onSubmit={handleEdit} style={{marginLeft: "1rem", width: "50%"}}>
            <TextField value={value} onChange={handleChange} margin="normal" fullWidth autoFocus/>
        </form>
    );     
}

export default EditTodoForm;