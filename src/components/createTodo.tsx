import React from 'react';

//                     prop1      prop2         prop3  prop4
const CreateTodo = ( { inputText, setInputText, todos, setTodos, setTaskState } ) => {
    // here you can write JS/TS code
    const inputTextHandler = (event:any) => {
        console.log(event.target.value);
        setInputText(event.target.value); // set prop text to the text of the input being typing in
    };

    const submitTodoHandler = (event:any) => {
        event.preventDefault(); // prevent the page from reloading on button click
        setTodos([
            ...todos, // this makes sure the following line doesnt override the array
            { text: inputText, completed: false, id: Math.random() * 10 } // add a new object to the array
        ]);
        setInputText(""); // reset input text field
    };

    const taskStateHandler = (event:any) => {
        setTaskState(event.target.value);
    };

    return (
        <form>
            <input 
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={taskStateHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default CreateTodo;