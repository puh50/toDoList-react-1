import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";

import ToDoList from "./components/TodoList";
import Title from "./components/Title";
import DateNow from "./components/DateNow";
import TodoForm from "./components/TodoForm";
import AddButton from "./components/AddButton";
import Toggler from "./components/Toggler";
import TodoListContextProvider from "./context/TodoListContext";

function App() {

    const [isForm, setIsForm] = useState(false);

    return (
        <TodoListContextProvider>
            <Toggler />
            <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <Board className="board flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-black dark:text-gray-100">
                        <Title title="My to do list" />
                        <DateNow />
                    </div>
                    <div>
                        <ToDoListBlock className="todo-list-block mb-2">
                            <ToDoList setIsForm={setIsForm} />
                            {isForm && <TodoForm setIsForm={setIsForm} />}
                        </ToDoListBlock>
                        <AddButton setIsForm={setIsForm} />
                    </div>
                </Board>
            </div>
        </TodoListContextProvider>
    );
};


const Board = styled.div`
    position: relative;
`;

const ToDoListBlock = styled.div`
    display: flex;
`;



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
