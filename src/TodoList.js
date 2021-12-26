import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import Todo from "./Todo";

const TodoList = (props) => {
    return(
        <div>
            <Paper>
                <List>
                    {props.todos.map((todo) => (
                        <>
                           <Todo 
                            task={todo.task} 
                            key={todo.id} id={todo.id} 
                            completed={todo.completed} 
                            removeTodo = {props.removeTodo}
                            toggleTodo = {props.toggleTodo}/>
                            <Divider/>
                        </>    
                    ))}
                </List>
             </Paper>
           
        </div>
    )
};

export default TodoList;