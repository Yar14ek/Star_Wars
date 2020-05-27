import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-family: sans-serif;
  background: rgb(255, 208, 213);
  background: radial-gradient(
    circle,
    rgba(255, 208, 213, 1) 0%,
    rgba(0, 0, 0, 1) 23%
  );
`;
export const HeaderTitle = styled.h1`
  font-size: 50px;
  margin: 20px 0;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  padding: 20px 10px;

  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #afaf9c;
    transition: 0.6s;
    border-bottom: 2px solid #46ff00;
    border-top: 1px solid #46ff00;
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
