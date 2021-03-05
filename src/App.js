import React ,{useState} from "react"
import "./App.css"


function Todo({todo,index,completeTodo}) {
  return(
    <div>
      <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo-row">{todo.text}
      <button onClick={() => completeTodo(index)} >Complete</button>
      </div>
      </div>
     
  
  )
}



function TodoForm({addTodo}) { 
  const [value,setValue] = useState("");

  const handleSubmit = (event) => {
  event.preventDefault();
  if(!value) return ; 
  addTodo(value);
  setValue("");
}


  return(
    <form onSubmit={handleSubmit}>
      <p className="input-text">Just Add your task and press enter</p>
      <input placeholder="Enter your todo task" type="text" className="input-box" value={value} onChange={event => setValue(event.target.value)} />
    </form>
  )
}


function App() {
  const [todos,setTodos] = useState([
    {
      text : "new one 1",
      isCompleted : false 
    },
    {
      text : "new one 3",
      isCompleted : false 
    },
    {
      text : "new one 2",
      isCompleted : false 
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true ;
    setTodos(newTodos)
  }


  return (
    <div className="App">
      <h3 className="main-heading">Todos App with Hooks </h3>
      <div className="todo-card">
        { todos.map((todo,index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App ; 