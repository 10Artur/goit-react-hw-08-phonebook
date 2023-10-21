import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)
`
  color: rgb(32, 49, 66);
  font-size: 18px;
  font-weight: 500;
  padding: 6px;
  border: 1px solid rgb(31, 51, 50);
  border-radius: 8px;
  margin-right: 16px;

  &.active {
    color: rgb(255, 255, 255);
    background-color: rgb(22, 106, 124);
  }
`;