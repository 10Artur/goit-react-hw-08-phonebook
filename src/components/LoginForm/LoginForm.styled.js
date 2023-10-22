import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  justify-content: center;
  background-color: #00bfa6;
  height: 100vh;
  padding-top: 160px;
`;

export const Title = styled.h3 `
  text-align: center;
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  width: 400px;
  height: 255px;
  padding: 20px;
  border-radius: 10px;
`;

export const Label = styled.label `
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input `
  border-radius: 5px;
  height: 30px;
`;

export const Button = styled.button `
  /* margin-top: 25px; */
  border-radius: 8px;
  padding: 8px;
  width: 100px;
  margin: 0 auto;
  background-color: transparent;
  font-weight: 500;
  font-size: 18px;
  color: #00bfa6;
  border: 1px solid #00bfa6;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: #00bfa6;
  }
`;