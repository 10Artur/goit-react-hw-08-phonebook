// import styled from 'styled-components';
// import { Form, Field, ErrorMessage } from 'formik';
// import { PatternFormat } from 'react-number-format';

// export const ContactsForm = styled(Form)
// `
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   margin-top: 40px;
//   align-items: center;
//   margin-bottom: 50px;
// `;

// export const ContactsLabel = styled.label `
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// export const ContactsField = styled(Field)
// `
//   width: 250px;
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   color: #555;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }
// `;

// export const PatterFormatStyle = styled(PatternFormat)
// `
//   width: 250px;
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   color: #555;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }
// `;

// export const ContactsError = styled(ErrorMessage)
// `
//   color: red;
//   font-weight: 500;
//   font-size: 15px;
//   font-style: italic;
// `;

// export const ContactsBtn = styled.button `
//   background-color: #00bfa6;
//   padding: 10px 10px;
//   color: #fff;
//   letter-spacing: 2px;
//   cursor: pointer;
//   border-radius: 10px;
//   border: 2px dashed #00bfa6;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
//     rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
//   transition: 0.4s;

//   &span:last-child {
//     display: none;
//   }

//   &:hover {
//     transition: 0.4s;
//     border: 2px dashed #00bfa6;
//     background-color: #fff;
//     color: #00bfa6;
//   }

//   &:active {
//     background-color: #87dbd0;
//   }
// `;

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
  color: rgb(236, 234, 234);
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
  color: rgb(32, 49, 66);
  font-size: 16px;
  font-weight: 500;
  background-color: rgb(8, 72, 121);
  color: rgb(255, 255, 255);

  padding: 2px;
  border-radius: 8px;
  border: 1px solid rgb(31, 51, 50);
  margin-top: 15px;
`;

export const ErrorMess = styled(ErrorMessage)
`
  width: 200px;
  color: red;
  font-size: 10px;
`;