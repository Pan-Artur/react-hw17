import styled from "styled-components";

export const StyledPhoneEditor = styled.div`
  width: 600px;
  height: 285px;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    color: rgb(49, 64, 79);
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 30px;
  }

  h2 {
    color: rgb(43, 66, 90);
    font-size: 18px;
    margin-bottom: 8px;
  }

  input {
    width: 96%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: rgb(48, 139, 200);
    }
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: rgb(42, 186, 102);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgb(21, 162, 80);
    }
  }
`;
