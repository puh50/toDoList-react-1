import React, {useContext} from "react";
import styled, {css} from "styled-components";

import {TodoListContext} from "../context/TodoListContext";

export default function AddButton({setIsForm}) {

    const {setEditItem} = useContext(TodoListContext);

    const addHandler = () => {
        setIsForm(() => {
            return true
        });

        setEditItem(null);
    };

    return (
        <Button
            className="add-button border-none rounded-md bg-blue-400 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900 active:bg-blue-800 cursor-pointer flex items-center justify-center"
            onClick={addHandler}
        >
            <Plus plus>╋</Plus>
        </Button>
    );
};

const Button = styled.button`
    width: 322px;
    height: 50px;
`;
const Plus = styled.span`
    content: "\002B";
    width: 25px;
    height: 25px;

    ${props => props.plus && css`
        background-color: transparent;
padding: 0;
margin: 0;
        color: white;
        font-size: 20px;
        font-weight: 700;
    `
    };
`;