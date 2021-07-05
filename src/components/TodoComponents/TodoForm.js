import React from 'react';

function todoForm(props) {
    return (
        <form className='todoForm' onSubmit={props.addTodo}>
            <input  
                name='task'
                value={props.task}
                onChange={props.inputChange}
                placeholder='Task...'
            />
            <button className='buttonAdd' type='submit'>Add Todo</button>
            <button className='buttonClear' onClick={props.clear}>Clear</button>
        </form>
    )
}

export default todoForm;