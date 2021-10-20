import React, {createContext, useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";

export const TodoListContext = createContext();

export default function TodoListContextProvider(props) {
    const initialState = JSON.parse(localStorage.getItem('todos')) || [];

    const [todos, setTodos] = useState(initialState);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodo = title => {
        if (title) {
            setTodos([...todos, {id: uuidv4(), title, complete: false}]);
        }
    };

    const removeTodo = id => {
        setTodos(todos.filter((task) => task.id !== id));
    };

    const findItem = id => {
        const item = todos.find(todo => todo.id === id);

        setEditItem(item);
    };

    const editTodo = (id, title, complete) => {
        const newTodos = todos.map(todo => {
            return todo.id === id ? {id, title, complete} : todo;
        });

        setTodos(newTodos);
        setEditItem(null);
    };

    return (
        <TodoListContext.Provider value={{todos, addTodo, removeTodo, findItem, editTodo, editItem, setEditItem}}>
            {props.children}
        </TodoListContext.Provider>
    );
};