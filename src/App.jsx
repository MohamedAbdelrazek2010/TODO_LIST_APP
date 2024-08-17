import { useRef, useState } from "react";
import "./App.css";

export default function App() {
  const inputRef = useRef();

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const todo = inputRef.current.value;
    const newItem = {
      completed: false,
      todo,
    };
    const newTodos = [...todos, newItem];
    console.log(newItem);
    setTodos(newTodos);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    console.log(newTodos[index]);
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <br />
      <div className="todos">
        <ul>
          {todos.map(({ todo, completed }, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="todo">
                <li
                  key={index}
                  onClick={() => handleItemDone(index)}
                  className={completed ? "done" : ""}
                >
                  {todo}
                </li>
                <span className="del" onClick={() => handleDeleteItem(index)}>
                  X
                </span>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="input">
        <input placeholder="enter your task..." ref={inputRef} />
        <button onClick={addTodo}>Add todo</button>
      </div>
    </div>
  );
}