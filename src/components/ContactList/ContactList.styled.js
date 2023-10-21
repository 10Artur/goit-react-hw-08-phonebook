// import styled from 'styled-components';

// export const ContactsContainer = styled.div `
//   width: 600px;
//   margin: 34px auto;
// `;

// export const ContactsListItems = styled.ul `
//   display: grid;
//   margin-top: 30px;
//   gap: 15px;
// `;

// export const ContactsListItem = styled.li `
//   display: flex;
//   justify-content: space-between;
// `;

// export const ContactsListBtn = styled.button `
//   position: relative;
//   display: inline-block;
//   padding: 5px 10px;
//   text-align: center;
//   font-size: 14px;
//   letter-spacing: 1px;
//   text-decoration: none;
//   color: red;
//   background: transparent;
//   cursor: pointer;
//   transition: ease-out 0.5s;
//   border: 2px solid red;
//   border-radius: 10px;
//   box-shadow: inset 0 0 0 0 red;

//   &:hover {
//     color: white;
//     box-shadow: inset 0 -100px 0 0 red;
//   }

//   &:active {
//     transform: scale(0.9);
//   }
// `;

import styled from 'styled-components';

export const ContactListStyled = styled.ul `
  margin-top: 15px;
`;

export const ContactItemStyled = styled.li `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
`;

export const ButtonStyled = styled.button `
  border-radius: 8px;
  /* padding: 5px; */
`;
export const Edit = styled.button `
  border-radius: 8px;
`;

export const Name = styled.p `
  width: 48%;
  background-color: rgb(182, 218, 248);
  padding-left: 8px;
  color: rgb(77, 39, 39);
`;

export const Number = styled.p `
  width: 48%;
  background-color: rgb(182, 218, 248);
  padding-left: 8px;
  color: rgb(77, 39, 39);
`;

export const HeaderLi = styled.li `
  display: flex;
  align-items: center;
  /* gap: 10px; */
  margin-bottom: 8px;
`;

export const HeaderName = styled.p `
  width: 50%;
  background-color: rgb(112, 67, 53);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: rgb(255, 255, 255);
`;