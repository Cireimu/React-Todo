import React from 'react';

const Todo = props => {
    let completed = props.todo.completed ? 'completed' : '';

    return (
        <div className={`todoContainer ${completed}`}>
            <div 
                className={`todo ${completed}`}
                key={props.todo.id}
                onClick={event => {
                    props.toggleTodo(props.todo.id);
                }}
            >
                {props.todo.task}
            </div>
            {/* <button className='buttonDel' onClick={event => props.delete(props.todo.id)}>Delete</button> */}
        </div>
    )
}

export default Todo;