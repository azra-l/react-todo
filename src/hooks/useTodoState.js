import { v4 as uuid } from 'uuid';
import useLocalStorageState from "./useLocalStorageState";

const useTodoState = (initialTodos) => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

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


    const editTodo = (todoId, editedTask) => {
        const edited = todos.map((todo) => {
            return todo.id === todoId ? {...todo, task: editedTask} : todo;
        });

        setTodos(edited);
    }
    
    return [todos, addTodo, removeTodo, toggleTodo, editTodo];
}

export default useTodoState;





