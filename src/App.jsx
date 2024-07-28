import { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
//import axios from "axios"
import { useDispatch } from "react-redux";
import { setTodos } from "./store/actions/todoActions";
import api from "./utils/api";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className="vh-100 vw-100 bg-dark text-white">
      <div className="container p-5">
        <h2 className="text-warning text-center">
          Redux <span className="text-danger">TODO</span>
        </h2>

        <AddForm />

        <ListTodos />
      </div>
    </div>
  );
};

export default App;
