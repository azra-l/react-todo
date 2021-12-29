import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

const EditTodoForm = (props) => {
    const {task, id, toggleIsEditing} = props;
    const dispatch = useContext(DispatchContext);

    const [value, handleChange, reset] = useInputState(task);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch({type: "EDIT", id: id, newTask: value});
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