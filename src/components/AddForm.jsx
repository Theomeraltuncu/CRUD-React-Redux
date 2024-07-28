import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
//import ActionTypes from '../store/actionTypes';
import { addTodo } from "../store/actions/todoActions";
//import axios from 'axios';
import api from "../utils/api";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    //  console.log(newTodo)

    api
      .post("/todos", newTodo)
      .then(() => dispatch(addTodo(newTodo)))
      .catch((err) => alert("error occured"));

    // dispatch({
    //     type:ActionTypes.ADD,
    //     payload: newTodo,
    // })

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
        <input
          className="form-control"
          placeholder="What will you do today?"
          type="text"
        />
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    </div>
  );
};

export default AddForm;
