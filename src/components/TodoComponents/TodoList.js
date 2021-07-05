// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todoList'>
            {props.todos.map(todoItem => {
                return <Todo todo={todoItem} key={todoItem.id} toggleTodo={props.toggleTodo} delete={props.deleteForm}/>
            })}
        </div>
    )
}

export default TodoList;