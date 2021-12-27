import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from "@material-ui/core";
import { DeleteOutlineRounded, Edit } from '@material-ui/icons';
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

const Todo = (props) => {
    const { task, completed, id, removeTodo, toggleTodo, editTodo } = props;
    const [ isEditing, toggleIsEditing ] = useToggleState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        removeTodo(id);
    }

    const handleToggleComplete = (e) => {
        e.preventDefault();
        toggleTodo(id);
    }

    const handleToggleEdit = (e) => {
        e.preventDefault();
        toggleIsEditing();
    }

    return(
        <div>
             <ListItem style={{height: "64px"}}>
                 {isEditing ? 
                 <EditTodoForm task={task} id={id} editTodo={editTodo} toggleIsEditing={toggleIsEditing}/>:
                <>
                    <Checkbox checked={completed} tabIndex={-1} onClick={handleToggleComplete}/>
                    <ListItemText>{task}</ListItemText>
                    <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={handleDelete}>
                        <DeleteOutlineRounded/>
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={handleToggleEdit}>
                        <Edit/>
                    </IconButton>
                    </ListItemSecondaryAction>
                </>
                }
            </ListItem>
        </div>
    )
}

export default Todo;