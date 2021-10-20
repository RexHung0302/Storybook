import React, { useState } from 'react';

import './TodoList.css';

import { TodoItem } from '../TodoItem';

const fakeApi = [
  {
    title: "測試項目1",
    isDone: false,
  },
  {
    title: "測試項目2",
    isDone: false,
  },
  {
    title: "測試項目3",
    isDone: true,
  },
  {
    title: "測試項目4",
    isDone: false,
  },
]

export const TodoList = () => {
  const [todo, setTodo] = useState(fakeApi);

  const onClickHandler = (key: number) => {
    setTodo((preVal) => {
      let newItem = todo;
      newItem[key].isDone = !newItem[key].isDone;
      return preVal = newItem;
    })
  };

  return (
    <div className="todoList">
      {
        todo.map((item, index) => (
          <TodoItem {...item} id={index} key={index} onClickHandler={onClickHandler} />
        ))
      }
    </div>
  )
};
