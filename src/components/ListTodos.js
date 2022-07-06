import React from "react";
import AddTodos from "./AddTodos";
import { toast } from 'react-toastify';
import styled from "styled-components";

class listTodos extends React.Component {
    
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homeworks'},
            { id: 'todo2', title: 'Learning English'},
            { id: 'todo3', title: 'Coding Project'}
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Success add new task!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter( item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.info("Success delete a task!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // case SAVE
        if (isEmptyObj === false && editTodo.id === todo.id ) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex( (item => item.id === todo.id) );

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })

            toast.success("Update task succeed!")

            return;
        }
        
        // case EDIT
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        // let listTodos = this.state.listTodos
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <Container>
                <div className="list-todo-container">
                    <AddTodos 
                    addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                { editTodo.id === item.id ?
                                                    <span>
                                                        { index + 1 } - <input 
                                                        value={editTodo.title}
                                                        onChange={ (event) => this.handleOnchangeEditTodo(event) }
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        { index + 1 } - { item.title }
                                                    </span>
                                                }
                                            </>
                                        }
                                        
                                            <button className="edit"
                                                onClick={ () => this.handleEditTodo(item) }
                                            >
                                                { isEmptyObj === false && editTodo.id === item.id ?
                                                    'save' : 'Edit'
                                                }   
                                            </button>
                                            <button className="delete"
                                                onClick={ () => this.handleDeleteTodo(item) }
                                            >Delete</button>
                                        
                                    </div>
                                )
                            }) 
                        }
                    </div>
                </div>
            </Container>
        )
    }
}

export default listTodos

const Container = styled.div`
    width: 100%;
    .list-todo-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        .list-todo-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            width: 50%;
            .todo-child {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                justify-content: flex-start;
                span {
                    width: 13rem;
                    font-size: 1rem;
                }
                button {
                    cursor: pointer;
                }
            }
        }
    }
`;