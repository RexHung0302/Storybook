import React from 'react';

import './TodoItem.css';

interface TodoItemProps {
  /**
   * TodoItem 的項目名稱
   */
  title: string;
  /**
   * TodoItem 是否完成了
   */
  isDone: boolean;
  id: number;
  onClickHandler: (key: number) => void;
}

export const TodoItem = ({ title, isDone, id, onClickHandler }: TodoItemProps) => (
  <div className={isDone ? "todoItem__done todoItem" : "todoItem"} onClick={() => onClickHandler(id)}>
    <input className="input" type="checkbox" id={`checkbox_${id}`} checked={isDone} onChange={() => onClickHandler(id)} />
    <label className="label" htmlFor="checkbox">{title}</label>
  </div>
);
