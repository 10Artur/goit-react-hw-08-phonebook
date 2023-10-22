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
  color: white;
  border: 1px solid red;
  background-color: transparent;
  padding: 4px;

  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: red;
  }
`;

export const Name = styled.p `
  width: 48%;
  background-color: white;
  padding-left: 8px;
  padding-top: 2px;
  padding-bottom: 5px;
  color: black;
`;

export const Number = styled.p `
  width: 48%;
  background-color: white;
  padding-top: 2px;
  padding-bottom: 5px;
  padding-left: 8px;
  color: black;
`;

export const HeaderLi = styled.li `
  display: flex;
  align-items: center;
  /* gap: 10px; */
  margin-bottom: 8px;
`;

export const HeaderName = styled.p `
  width: 50%;
  background-color: rgb(182, 218, 248);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
`;