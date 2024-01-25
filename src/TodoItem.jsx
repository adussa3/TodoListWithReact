// Import Material UI Components
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function TodoItem({ id, text, isCompleted, deleteTodo, toggleIsCompleted }) {
    const labelId = `checkbox-list-label-${id}`;

    return (
        <ListItem
            key={id}
            secondaryAction={
                <IconButton onClick={deleteTodo} edge="end">
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton onClick={toggleIsCompleted} dense>
                <ListItemIcon>
                    <Checkbox edge="start" checked={isCompleted} tabIndex={-1} disableRipple inputProps={{ "aria-labelledby": labelId }} />
                </ListItemIcon>
                <ListItemText id={labelId} primary={text} />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoItem;
