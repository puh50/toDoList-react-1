import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components"

import EditButton from "./EditButton";
import RemoveButton from "./RemoveButton";
import {TodoListContext} from "../context/TodoListContext";


export default function Todo({todo, isTodoComplete, setIsForm}) {

    const {editTodo} = useContext(TodoListContext);
    const [isComplete, setIsComplete] = useState(isTodoComplete);

    const completeTaskHandler = () => {
        setIsComplete((prev) => {
            return !prev;
        });

        //  Why it does not work? Doesn't store in localStorage?
        // Because 'setIsComplete' works async and the 'editTodo' get previous value of the 'isComplete' 
        // editTodo(todo.id, todo.title, isComplete);
    }

    useEffect(() => {
        editTodo(todo.id, todo.title, isComplete);
    }, [isComplete]);

    return (
        <ListItemBlock className="list-item-block">
            <ListItem className="bg-white dark:bg-gray-900 text-dark dark:text-gray-100">
                <TodoTask className={isComplete && 'strike'}>{todo.title}</TodoTask>
            </ListItem>
            <EditButtonBlock>
                <EditButton
                    todo={todo}
                    setIsForm={setIsForm}
                />
            </EditButtonBlock>
            <RemoveButtonBlock >
                <RemoveButton todo={todo} />
            </RemoveButtonBlock>
            <CompleteSignBlock>
                <input
                    type="checkbox"
                    className="cursor-pointer w-5"
                    title={isComplete ? 'Incomplete' : 'Complete'}
                    checked={isComplete && 'checked'}
                    onChange={completeTaskHandler}
                />
            </CompleteSignBlock>
        </ListItemBlock>
    );
};

const ListItemBlock = styled.div`
    &.list-item-block {
        position: relative;
    };
`;

const ListItem = styled.li`
    list-style: none;

    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;

    margin-bottom: 20px;
`;

const TodoTask = styled.p`
     &.strike {
        text-decoration: line-through;
    };
`;

const RemoveButtonBlock = styled.div`
    position: absolute;
    bottom: -10px;
    right: 75px;
`;
const EditButtonBlock = styled.div`
    position: absolute;
    bottom: -10px;
    right: 40px;
`;
const CompleteSignBlock = styled.div`
    position: absolute;
    bottom: -14px;
    right: 6px;

    >input {
        width: 26px;
        height: 21px;
        margin: 0;
        padding: 0;
    };
`;