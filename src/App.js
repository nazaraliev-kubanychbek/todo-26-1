import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";
import './style.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [todoList, setTodoList] = useState([]);

  const setKey = (key, id) =>{

    setData(data.map(item =>{

      if(item.id === id){
        return {
          ...item,
          [key]: !item[key],
        }
      } else{
        return item
      }
    }))
  }

  useEffect(()=>{
    setTodoList(data.filter(item => !item.deleted))
  },[data])
  return (
    <div className="wrapper">

      <Form data={data} setData={setData} />

      <div className="wrapper-bottom">
      <TodoList setKey={setKey} todoList={todoList} />
      <Footer />
      </div>

    </div>
  );
}

export default App;
