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
        <Paper>
            <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    )
}

export default TodoForm;