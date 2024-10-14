

const TodoItem = () => {
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <button className="todo-item-complete-btn"></button>
        <p className="todo-item-text">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="todo-item-right">
        <button className="todo-item-right-btn">correct</button>
        <button className="todo-item-right-btn">important</button>
        <button className="todo-item-right-btn">delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
