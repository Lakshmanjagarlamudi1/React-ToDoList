import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaCheckDouble } from 'react-icons/fa'
import { TodoContext } from '../context/TodoContext';
import { REMOVE_TODO } from '../context/actions.type';

const Todo = () => {
    const { todos, dispatch } = useContext(TodoContext)
    return (
        <ListGroup style={{height:200}} className="mb-2 items overflow-auto">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="icon"
                    onClick={()=>{
                        dispatch({
                            type:REMOVE_TODO,
                            payload:todo.id
                        })
                    }}
                    ><FaCheckDouble/></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todo
