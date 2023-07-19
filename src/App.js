import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';

function App() {
  return (
    <div>
      <ToDo />
    </div>
  );
}

function ToDo() {
  let [todo, setTodo] = useState("");
  let [list, setList] = useState([]);

  let inputHandler = (e) => {
    console.log(e.target.value);
    let newValue = e.target.value;
    setTodo(newValue);
  };

  let addNewItem = () => {
    let newList = [todo, ...list];
    setList(newList);
    setTodo("");
  };

  let deleteTodo = (index) => {
    list.splice(index, 1);
    console.log(list);
    setList([...list]);
  };

  return (
    <div>
      <h1 style={{ fontFamily: "courier new", fontSize: 60}} className="text-center bg-danger text-white p-3 m-2 border border-danger rounded">Todo App </h1>
      <input style={{ width: 400, margin: 20, inlineSize: 400, alignContent: "center",fontFamily: "courier new"}}
        type="text"
        placeholder="Things to do:"
        value={todo}
        onChange={inputHandler}
      />
      <input style={{ fontFamily: "courier new", fontSize: 20}} type="button" className="m-2 p-1 bg-success text-light border border-primary rounded" value="Add New Task" onClick={addNewItem} />

      <hr />

      {list.map((item, index) => (
        <div key={index} style={{fontFamily: "courier new", fontSize: 20}} className="d-flex justify-content-between">
          <h1>{item}</h1>
          <input type="button" className="m-2 p-1 bg-primary text-light border border-primary rounded" value="Delete" onClick={() => deleteTodo(index)} />
        </div>
      ))}
    </div>
  );
}

export default App;
