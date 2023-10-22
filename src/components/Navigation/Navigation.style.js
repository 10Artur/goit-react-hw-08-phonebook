import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)
`
  color: #00bfa6;
  font-size: 18px;
  font-weight: 500;
  padding: 6px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  border: 1px solid #00bfa6;
  border-radius: 8px;

  &.active {
    color: rgb(255, 255, 255);
    background-color: #00bfa6;
  }
`;

export const Nav = styled.nav `
  display: flex;
  gap: 15px;
`;