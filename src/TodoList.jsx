// Import useState and uuid
import { useState } from "react";
import { v4 as uuid } from "uuid";

// Import Components
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

// Import Material UI Components
import List from "@mui/material/List";

// Testing data
const initialTodos = [
    { id: uuid(), text: "buy groceries", isCompleted: false },
    { id: uuid(), text: "do homework", isCompleted: true },
    { id: uuid(), text: "go to doctor's appointment", isCompleted: false },
];

function TodoList() {
    // Todos State
    const [todos, setTodos] = useState(initialTodos);

    // Add a new item to the Todos State
    const addTodo = (text) => {
        if (text.length == 0) {
            return;
        }
        const newTodo = { id: uuid(), text, isCompleted: false };
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
