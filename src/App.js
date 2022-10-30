import React from "react";
import styled from "styled-components";
import Todoform from "./Components/Todoform";

function App() {
  return (
    <AppStyled>
      <div className="content-container">
        <Todoform />
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .content-container {
    background-color: #374954;
    width: 80%;
    height: 80vh;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 10px 12px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      input,
      textarea {
        width: 100%;
        padding: 0.7rem 1rem;
        font-size: inherit;
        font-family: inherit;
        outline: none;
        border: none;
        border-radius: 15px;
        filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
        margin: 0.5rem 0;
        background-color: #4f6877;
        color: white;
        resize: none;
      }
    }
  }
`;

export default App;