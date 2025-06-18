import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import "../css/todoList.css"
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoByID } from '../redux/todoSlice'
import { updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;
    const [editable, setEditable] = useState<Boolean>(false);
    const [newTodo, SetNewTodo] = useState<string>(content);

    if (!todoProps) {
        return null;
    }
    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoByID(id))

    }
    const handleUpdateTodo = () => {
        const payload = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false);

    }
    return (
        <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row",
            border: "1px solid gray", padding: "15px", marginTop: "25px", borderRadius: "5px"
        }}>
            {editable ? <input style={{ backgroundColor: "beige", outline: "none", border: "none", borderBottom: "1px solid gray" }}
                type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { SetNewTodo(e.target.value) }} />
                : <div className='todo-text'>{content}</div>}
            <div>
                <MdDeleteForever onClick={handleRemoveTodo} className='todo-icons' />
                {editable ? <FaCheck onClick={handleUpdateTodo} className='todo-icons' /> :
                    <FaRegEdit className='todo-icons' onClick={() => setEditable(true)} />}
            </div>
        </div>
    )
}

export default Todo