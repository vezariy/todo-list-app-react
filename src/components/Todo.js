import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    
    const deleteHandler  = () => {
        setTodos(todos.filter((elD) => elD.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((elCom) => {
            if (elCom.id === todo.id) { 
                return {
                    ...elCom, completed: !elCom.completed
                }
            }
            return elCom;
        }
        ) )
    }
    
    return (
        <div className="todo">
            <li className="todo-item"> {text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;