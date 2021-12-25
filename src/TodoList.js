import React from "react";
import { Paper, List, Divider, ListItem, ListItemText } from "@material-ui/core";

const TodoList = (props) => {
    return(
        <div>
            <Paper>
                <List>
                    {props.todos.map((todo) => (
                        <>
                            <ListItem>
                                <ListItemText>{todo.task}</ListItemText>
                            </ListItem>
                            <Divider/>
                        </>    
                    ))}
                </List>
            </Paper>
           
        </div>
    )
};

export default TodoList;