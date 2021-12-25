import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar  from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TodoList from "./TodoList";

import './TodoApp.css'



const TodoApp = () => {
    const [todos, setTodos] = useState([{id: 1, task: "clean", completed: false}, {id: 2, task: "cook", completed: false}]);
    return(
        <div>
            <Paper style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
                <AppBar color="primary" position="static" style={{height: "64px"}}>
                    <Toolbar>
                        <Typography color='inherit'>Todos</Typography>
                    </Toolbar>
                </AppBar>
                <TodoList todos={todos}/>
            </Paper>
        </div>
    )
};

export default TodoApp;