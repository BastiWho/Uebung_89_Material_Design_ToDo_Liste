import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import '@fontsource/roboto/500.css';


function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleClick = () => {
    if (inputValue.trim() === '') return;;
    const task = {
      text: inputValue,
      checked: false    
    }
    setTodos([...todos, task]);
    setInputValue('');
  }

  const toogleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }

  return (
    <>
    <Container maxWidth="md" align="center">
      <Typography variant='h1' fontFamily='Roboto'>
      My ToDo List
        </Typography>
        <hr />
        <Stack direction="row" spacing={2} justifyContent="center" margin="2em">
          <TextField id="outlined-basic" label="Neue Aufgabe" variant="outlined" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <IconButton aria-label='send' onClick={handleClick} size="small" color='success'>
            <SendIcon />
            </IconButton>
          <IconButton aria-label="delete" color='error' onClick={() => setTodos([])}>
          <DeleteIcon />
          </IconButton>
        </Stack>
        <br />
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: "1px solid gray"}}>
         <List>
          {todos.map((task, index) => {
          return (
            <ListItem disablePadding>
              <ListItemButton onClick={() => toogleCheck(index)} >
                <ListItemIcon>
                 <Checkbox checked={task.checked}/>
                </ListItemIcon>
               <ListItemText primary={task.text} className={task.checked ? "done" : ""} />
              </ListItemButton>
            </ListItem>
          );})}
        </List>
        </Box>
    </Container>        
    </>
  );
}

export default App;
