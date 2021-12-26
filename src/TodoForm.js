import { Paper, TextField } from "@material-ui/core"
import useInputState from "./hooks/useInputState";

const TodoForm = (props) => {
    const { addTodo } = props;
    const [value, handleChange, reset] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        reset();
    }

    return(
        <Paper style={{ margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={handleSubmit}>
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal"
                label="Add New Todo"
            />
            </form>
        </Paper>
    )
}

export default TodoForm;