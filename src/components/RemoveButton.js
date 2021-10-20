import React, {useContext} from "react";
import {TodoListContext} from "../context/TodoListContext";

export default function RemoveButton({todo}) {

    const {removeTodo, editItem, setEditItem} = useContext(TodoListContext);

    const removeHandler = () => {

        removeTodo(todo.id);

        if (editItem) {
            if (editItem.id === todo.id) {
                setEditItem(null);
            }
        }

    };

    return (
        <button onClick={removeHandler} className="main-btn-style hover:fill-current text-white">
            <span>
                <svg width="10px" height="12px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50,8H38V2a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2V8H2a2,2,0,0,0,0,4H9V50a2,2,0,0,0,2,2H41a2,2,0,0,0,2-2V12h7a2,2,0,0,0,0-4ZM18,4H34V8H18ZM39,48H13V12H39Z" />
                    <path d="M26,14.45a2,2,0,0,0-2,2V44.89a2,2,0,0,0,4,0V16.45A2,2,0,0,0,26,14.45Z" />
                    <path d="M33.56,14.45a2,2,0,0,0-2,2V44.89a2,2,0,1,0,4,0V16.45A2,2,0,0,0,33.56,14.45Z" />
                    <path d="M18.44,14.45a2,2,0,0,0-2,2V44.89a2,2,0,0,0,4,0V16.45A2,2,0,0,0,18.44,14.45Z" />
                </svg>
            </span>
        </button>
    );
};