import React from "react";
import { toast } from 'react-toastify';
import styled from "styled-components";

class AddTodos extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickAddTodo = () => {
        if(!this.state.title) {
            // if(undefined/null/empty) => false
            toast.error('Missing title!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title:''
        })
    }

    render() {
        let { title } = this.state;
        return(
            <Container>
                <div className="add-todo">
                    <span>
                        <input type="text" placeholder="Add new task" value={title}
                            onChange={ (event) => this.handleOnChangeTitle(event)}
                        />
                    </span>
                    <button type="button" className="add"
                        onClick={ () => this.handleClickAddTodo() }
                    >Add</button>
                </div>
            </Container>
        )
    }
}

export default AddTodos

const Container = styled.div`
    span {
        display: inline-block;
        background-color: #fff;
        height: 1.8rem;
        width: 13rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.2rem;
        input {
            height: 1.5rem;
            width: 100%;
            border: none;
            outline: none;
        }
    }
    button {
        height: 1.8rem;
        width: 3rem;
        cursor: pointer;
    }
`;