import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import ActionTypes from "../store/actionTypes";
import { deleteTodo } from "../store/actions/todoActions";
import api from "../utils/api";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => alert("error occured"));

    // dispatch({
    //   type: ActionTypes.DELETE,
    //   payload: todo.id,
    // })
  };

  const toggleIsDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    // console.log(updated)

    api
      .put(`/todos/${todo.id}`, updated)
      .then(() =>
        dispatch({
          type: ActionTypes.UPDATE,
          payload: updated,
        })
      )
      .catch((err) => alert("error occured"));
  };
  return (
    <div className="shadow-lg p-4 my-3 border">
      <h5>{todo.text}</h5>
      <div className="d-flex justify-content-between">
        <h6>{todo.is_done ? "Completed" : "Not yet completed"}</h6>
        <p>{todo.created_at}</p>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Edit
      </button>

      <button onClick={handleDelete} className="btn btn-danger mx-2">
        Delete
      </button>

      <button onClick={toggleIsDone} className="btn btn-success ">
        {todo.is_done ? "Mark as incomplete" : "Mark as Complete"}
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
