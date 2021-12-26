import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar  from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuid } from 'uuid';
import './TodoApp.css'


const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todoTask) => {
        const id = uuid();
       const todo = {
           id: id,
           task: todoTask,
           completed: false
       };
       setTodos([...todos, todo]);
    }

    const removeTodo = (todoId) => {
        const res = todos.filter((todo) => todo.id !== todoId);
        setTodos(res);
    }

    const toggleTodo = (todoId) => {
        const updated = todos.map((todo) => {
            return todo.id === todoId ? {...todo, completed: !todo.completed} : todo;
        });

        setTodos(updated);
    }

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
                <Grid container justifyContent='center' style={{marginTop:"1rem"}}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo}/>
                        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

export default TodoApp;
