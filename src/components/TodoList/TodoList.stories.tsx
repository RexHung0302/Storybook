import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoList } from './index';
import * as TodoItemStories from '../TodoItem/TodoItem.stories';

export default {
  title: 'TodoList/TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = () => <TodoList />;

export const TodoListItem = Template.bind({});

TodoListItem.args = {
  ...TodoItemStories.DefaultTodoItem.args
};
