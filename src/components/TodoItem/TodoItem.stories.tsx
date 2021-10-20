import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoItem } from './index';

export default {
  title: 'TodoList/TodoItem',
  component: TodoItem,
  argTypes: {
    backgroundColor: { control: 'color' },
    test: {
      name: "testName",
      type: {
        require: false,
      },
      description: "這是測試的 Props"
    }
  },
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const DefaultTodoItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultTodoItem.args = {
  title: '測試',
  isDone: false,
  id: 1
};

export const UndoneTodoItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UndoneTodoItem.args = {
  ...DefaultTodoItem.args
};

export const DoneTodoItem = Template.bind({});
DoneTodoItem.args = {
  ...DefaultTodoItem.args,
  isDone: true,
};
