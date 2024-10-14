import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";
import './style.css';

function App() {
  return (
    <div className="wrapper">
      
      <Form />

      <div className="wrapper-bottom">
      <TodoList />
      <Footer />
      </div>

    </div>
  );
}

export default App;
