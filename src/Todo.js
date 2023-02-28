import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoValue, setEditTodoValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      const newTodo = { id: Date.now(), text: inputValue, completed: false };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };
// This defines a function called handleDeleteTodo
//  that will be called when the "Delete" button for a todo item is clicked.
//  It takes the id of the todo item as a parameter, 
// and uses the filter method to create a new array of todo items that excludes the one with the specified id. 
// The function then uses the setTodos function to update the todos state variable to the new array.
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setEditTodoId(null);
  };

  // This defines a function called handleToggleComplete 
  // that will be called when the checkbox for a todo item is toggled. 
  // It takes the id of the todo item as a parameter, 
  // and uses the map method to create a new array of todo items 
  // where the item with the specified id has its completed property toggled.
  //  The function then uses the setTodos function to update the todos state variable to the new array.
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodoId(null);
  };

  const handleEditTodo = (id, text) => {
    setEditTodoId(id);
    setEditTodoValue(text);
  };

  const handleEditInputChange = (event) => {
    setEditTodoValue(event.target.value);
  };

  const handleSaveEditTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editTodoValue };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodoId(null);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {editTodoId === todo.id ? (
              <div>
                <input type="text" value={editTodoValue} onChange={handleEditInputChange} />
                <button onClick={() => handleSaveEditTodo(todo.id)}>Save</button>
              </div>
            ) : (
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                {todo.text}
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
