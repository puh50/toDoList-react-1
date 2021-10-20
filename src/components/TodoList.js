import React, {useContext} from "react";
import styled from "styled-components";

import Todo from "./Todo";
import {TodoListContext} from "../context/TodoListContext";

export default function TodoList({setIsForm}) {

    const {todos} = useContext(TodoListContext);
    const time = new Date().toLocaleString();

    return (
        <ToDoList className="rounded-md bg-gray-100 dark:bg-blue-900 bg-opacity-100 dark:bg-opacity-50">
            {todos.length ? (

                todos.map((todo) => {
                    const isTodoComplete = todo.complete

                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            isTodoComplete={isTodoComplete}
                            setIsForm={setIsForm}
                            time={time}
                        />
                    );
                })
            ) : (
                <div className="text-black dark:text-gray-50">No tasks</div>
            )}
        </ToDoList>
    );
};

const ToDoList = styled.ul`
    width: 300px;
    height: 500px;
    border: 1px solid black;

    padding: 10px;
    margin: 0;

    position: relative;

    overflow: auto;
`;

