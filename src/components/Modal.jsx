import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../store/actionTypes";
import api from "../utils/api";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleClick = () => {
    const newText = inputRef.current.value;

    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() =>
        dispatch({
          type: ActionTypes.UPDATE,
          payload: updatedTodo,
        })
      )
      .catch((err) => alert("error occured"));

    close();
  };
  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header ">
            <h5 className="modal-title">Edit ToDo</h5>
          </div>
          <div className="modal-body">
            <label>New Title</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
            <button onClick={close} type="button" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
