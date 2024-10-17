import TodoItem from './../TodoItem/TodoItem';

const TodoList = ({todoList, setKey}) => {
    return (
        <div>
               {
                todoList.map(item =>{
                    return <TodoItem setKey={setKey} item={item} />
                })
            }
        </div>
    );
}

export default TodoList;
