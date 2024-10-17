

const TodoItem = ({item, setKey}) => {
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <button className="todo-item-complete-btn" onClick={()=>{
          setKey('completed', item.id)
        }}>
          {
            item.completed ? '+' : ''
          }
        </button>
        <p className="todo-item-text" style={
          item.important
          ? {color: 'green'}
          : {}
        }>{item.text}</p>
      </div>

      <div className="todo-item-right">
        <button className="todo-item-right-btn">correct</button>
        <button className="todo-item-right-btn" onClick={()=>{
          setKey('important', item.id)
        }}>important</button>
        <button className="todo-item-right-btn" onClick={()=>{
          setKey('deleted', item.id)
        }}>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
