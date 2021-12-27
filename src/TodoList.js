import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import Todo from "./Todo";

const TodoList = (props) => {
    if(props.todos.length){
        return(
            <div>
                <Paper>
                    <List>
                        {props.todos.map((todo, i) => (
                            <>
                               <Todo 
                               {...todo}
                                key={todo.id} id={todo.id} 
                                removeTodo = {props.removeTodo}
                                toggleTodo = {props.toggleTodo}
                                editTodo = {props.editTodo}
                                />
                               {i < props.todos.length - 1 && <Divider/>} 
                            </>    
                        ))}
                    </List>
                 </Paper>
               
            </div>
        )
    }
    return null;
   
};

export default TodoList;