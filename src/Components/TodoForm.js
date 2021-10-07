import {useState, useContext} from 'react';
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button,
    InputGroupAddon
} from 'reactstrap'
import {v4} from 'uuid';
import {TodoContext} from '../context/TodoContext';
import {ADD_TODO} from '../context/actions.type';

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext)
    // console.log(todoString)

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please Enter Your Todo")
        }
        const todo = {
            todoString,
            id : v4()
        }
        dispatch({
            type:ADD_TODO,
            payload: todo
        })
        setTodoString("")
    }





    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Add your Todo"
                        value={todoString}
                        onChange={e=>setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="warning"
                        >Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;