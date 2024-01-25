// Import useState
import { useState } from "react";

// Import Material UI Components
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";

function TodoForm({ addTodo }) {
    // Text State
    const [text, setText] = useState("");

    // Update Text State
    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    // Add a new item to the Todos State
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <ListItem>
            {/*
                Note: you don't have to pass in the event object in the handleSubmit and updateText
                functions, the event object is automatically passed into them!
             */}
            <form onSubmit={handleSubmit}>
                {" "}
                <TextField
                    id={"outlined-basic"}
                    label="New Item"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    onSubmit={() => addTodo(text)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" type="submit">
                                    <CreateIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    );
}

export default TodoForm;
