import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components";

import {TodoListContext} from "../context/TodoListContext";

export default function TodoForm({setIsForm}) {

    const [title, setTitle] = useState('');
    const {addTodo, editTodo, editItem} = useContext(TodoListContext);

    const changeHandler = (evt) => {
        setTitle(evt.currentTarget.value)
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        if (!editItem) {
            addTodo(title);
            setTitle('');
        } else {
            if (title) {
                editTodo(editItem.id, title, editItem.complete);
            }
        }
    };

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
        } else {
            setTitle('');
        }
    }, [editItem]);

    const cancelHandler = (evt) => {
        evt.preventDefault();
        setIsForm((prev) => {
            return !prev;
        })
    };

    const resetHandler = () => {
        setTitle('');
    };

    return (
        <Form>
            <fieldset className="pt-3 bg-gray-100 dark:bg-blue-900 bg-opacity-100 dark:bg-opacity-50 border-1 rounded-md">
                <span className="absolute -top-2.5 pr-1 pl-1 bg-gradient-to-b from-gray-50 to-gray-100 font-bold rounded">{editItem ? 'Edit todo' : 'Add todo'}</span>
                <TextArea
                    value={title}
                    onChange={changeHandler}
                    cols="30"
                    rows="10"
                    required
                />
                <div className="buttons add-todo-form-buttons flex justify-between">
                    <div>
                        <button type="cancel" onClick={cancelHandler} className="main-btn-style">Cancel</button>
                        <button type="reset" onClick={resetHandler} className="main-btn-style">Clear</button>
                    </div>

                    <button type="submit" onClick={submitHandler} className="main-btn-style">{editItem ? 'Save' : 'Add'}</button>
                </div>
            </fieldset>
        </Form>
    );
};

const TextArea = styled.textarea`
    border-radius: 5px;
`;

const Form = styled.form`
    position: absolute;
    right: -280px;
`;