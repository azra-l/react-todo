import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from "@material-ui/core";
import { DeleteOutlineRounded, Edit } from '@material-ui/icons';
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { TodosContext } from "./contexts/todos.context";
import { useContext } from "react";

const Todo = (props) => {
    const { task, completed, id } = props;
    const {dispatch} = useContext(TodosContext);
    const [ isEditing, toggleIsEditing ] = useToggleState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch({type: "REMOVE", id: id});
    }

    const handleToggleComplete = (e) => {
        e.preventDefault();
        dispatch({type: "TOGGLE", id: id});
    }

    const handleToggleEdit = (e) => {
        e.preventDefault();
        toggleIsEditing();
    }

    return(
        <div>
             <ListItem style={{height: "64px"}}>
                 {isEditing ? 
                 <EditTodoForm task={task} id={id} toggleIsEditing={toggleIsEditing}/>:
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