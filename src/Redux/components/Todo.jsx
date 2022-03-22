import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoFailure,
  addTodoReq,
  addTodoSuccess,
  deleteTodo
} from "../actions";
import { TodoInput } from "./TodoInput";

export const Todo = () => {
  const dispatch = useDispatch();
  const { todos, loading, isErr } = useSelector((state) => ({
    todos: state.todos,
    loading: state.loading,
    isErr: state.isErr
  }));
  console.log(todos);
  const handleAdd = (payload) => {
      console.log(payload);
    // api call to
    // console.log(payload);
    const { title, status } = payload;
    dispatch(addTodoReq());
    axios
      .post("https://json-server-mocker-masai.herokuapp.com/tasks", {
        title,
        status
      })
      .then((res) => dispatch(addTodoSuccess(res.data)))
      .catch((err) => dispatch(addTodoFailure(err)));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <h1>Todo</h1>
      <TodoInput key={Date.now()} handleTask={handleAdd} name={"abhi"} />
      {loading && <h1>Loading.....</h1>}
      {isErr && <h1>Something went ...wrong</h1>}
      {!loading &&
        !isErr &&
        todos &&
        todos.map((item) => {
          return (
            <>
              <h5 key={item.id}>{item.title}</h5>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </>
          );
        })}
    </>
  );
};


