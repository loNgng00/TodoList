import React from 'react';
import ListTodos from './components/ListTodos';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <div className="todolist">
        <span className='title'>Welcome to my To-do Lists App</span>
        <ListTodos />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </Container>
  );
}

export default App;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(https://wallpapercave.com/wp/wp4053781.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    .todolist {
      width: 40vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      margin-top: 3rem;
      background-image: url(https://i.pinimg.com/originals/db/b7/13/dbb71380f0532cf346a21c221f2fdced.jpg);
      background-repeat: no-repeat;
      background-size: 100%;
      .title {
        font-size: 1.6rem;
        font-weight: bold;
        padding-top: 0.8rem;
        color: rgba(0, 0, 0, 0.7);
      }
    }
`;
