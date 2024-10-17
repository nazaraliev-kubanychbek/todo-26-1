import { useState } from "react";

const Form = ({data, setData}) => {
  const [text, setText] = useState('');
  const addTodo = (text) =>{
    setData([
      {
        text,
        deleted: false,
        important: false,
        correct: false,
        completed: false,
        id: data.length > 0 ? data[0].id + 1 : 1
      },
      ...data
    ])
  }

  return (
    <div className="form">
      <button onClick={()=>{
        addTodo(text)
      }}>+</button>
      <input type="text" placeholder="Create a new todo..."
      onChange={(e)=>{
        setText(e.target.value)
      }}
      />
    </div>
  );
};

export default Form;
