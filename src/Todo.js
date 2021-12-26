import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from "@material-ui/core";
import { DeleteOutlineRounded, Edit } from '@material-ui/icons';

const Todo = (props) => {
    const { task, completed, id, removeTodo, toggleTodo } = props;

    const handleDelete = (e) => {
        e.preventDefault();
        removeTodo(id);
    }

    const handleToggleComplete = (e) => {
        e.preventDefault();
        toggleTodo(id);
    }

    return(
        <div>
             <ListItem>
                 <Checkbox checked={completed} tabIndex={-1} onClick={handleToggleComplete}/>
                <ListItemText>
                   {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={handleDelete}>
                        <DeleteOutlineRounded/>
                    </IconButton>
                    <IconButton aria-label="Edit" >
                        <Edit/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

export default Todo;