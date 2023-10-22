import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)
`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 5px 0 5px;
`;

export const LabelStylet = styled.label `
  /* display: flex; */
`;

export const Text = styled.p `
  color: white;
`;

export const FieldStyled = styled(Field)
`
  width: 150px;
  border-radius: 8px;
  border: 1px solid rgb(31, 51, 50);
`;

export const ButtonForm = styled.button `
  width: 120px;
  height: 35px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  padding: 2px;
  border-radius: 8px;
  border: 1px solid white;
  margin-top: 15px;

  &:hover {
    color: #00bfa6;
    background-color: white;
  }
`;

export const ErrorMess = styled(ErrorMessage)
`
  width: 200px;
  color: red;
  font-size: 10px;
`;