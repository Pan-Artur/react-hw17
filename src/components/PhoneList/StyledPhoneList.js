import styled from "styled-components";

export const StyledPhoneList = styled.div`
  width: 600px;
  margin: 0;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  & > p {
    margin: 60px auto;
    color: #2c3e50;
    text-align: center;
    font-weight: 500;
    font-size: 17px;
  }

  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
  }

  div {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 15px;
    font-weight: 500;
    color: #34495e;
  }

  input[type="text"] {
    width: 96%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #3498db;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-2px);
    }

    p {
      margin: 0 auto 0 15px;
      color: #2c3e50;
      font-size: 16px;
    }

    button {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #c0392b;
      }
    }
  }
`;