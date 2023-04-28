import React from 'react';

// import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* Loop over each item in todos and render a Todo component for it */}
                {filteredTodos.map((todo) => (
                    <Todo 
                        key={todo.id}
                        text={todo.text}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;