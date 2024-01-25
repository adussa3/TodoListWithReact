// Import useState and useEffect
import { useState, useEffect } from "react";

// Import Components
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

// Import Material UI Components
import List from "@mui/material/List";

// Set the inital todos to the data stored in local storage
const getInitalData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) {
        return data;
    } else {
        return [];
    }
};

function TodoList() {
    // Todos State
    const [todos, setTodos] = useState(getInitalData);

    // Store the current todos data in local storage whenever the Todos State changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Add a new item to the Todos State
    const addTodo = (text) => {
        if (text.length == 0) {
            return;
        }

        // Note: you don't have to install the UUID NPM Package, you can use crypto.randomUUID()!
        const newTodo = { id: crypto.randomUUID(), text, isCompleted: false };
        setTodos([...todos, newTodo]);
    };

    // Delete an item from the Todos State
    const deleteTodo = (id) => {
        setTodos((currTodos) => currTodos.filter((todo) => todo.id !== id));
    };

    // Toggle the isComplete boolean in a Todo
    const toggleIsCompleted = (id) => {
        setTodos((currTodos) => {
            return currTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                } else {
                    return todo;
                }
            });
        });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                {todos.map((todo) => {
                    const { id, text, isCompleted } = todo;
                    return <TodoItem key={id} id={id} text={text} isCompleted={isCompleted} deleteTodo={() => deleteTodo(id)} toggleIsCompleted={() => toggleIsCompleted(id)} />;
                })}
                <TodoForm addTodo={addTodo} />
            </List>
        </div>
    );
}

export default TodoList;
