import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {

    // events
    const deleteHandler = () => {
        // filter through all of the todo list items and find the one clicked on and remove it
        setTodos(todos.filter((elemnt) => elemnt.id !== todo.id));
    };

    const completeHander = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    // keep all the other properties in the todos object the same and only change completed
                    ...item, completed: !item.completed
                }
            }
            return item; // if something failed just return the regular item
        }));
    }

    return (
        <div className="todo">
            {/* (condition) ? "true" : "false" is just if else statement */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHander} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;