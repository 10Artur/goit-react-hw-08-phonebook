import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  justify-content: center;
  background-color: rgb(188, 237, 220);
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
  background-color: rgb(55, 192, 220);
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
  background-color: rgb(15, 176, 120);
  font-weight: 500;
  font-size: 18px;
  color: aliceblue;
`;