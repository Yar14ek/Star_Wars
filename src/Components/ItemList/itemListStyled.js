import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  border: 2px solid #ebec7e;
  border-radius: 10px;
  background: rgb(132, 60, 84);
  background: linear-gradient(
    153deg,
    rgba(132, 60, 84, 0.8886905103838411) 39%,
    rgba(39, 35, 37, 1) 100%
  );
  cursor: pointer;
  height: 200px;
  width: 17%;
  margin: 15px 0;
  &:hover {
    transition: all 0.5s ease;
    border-color: #46ff00;
    box-shadow: inset 0 0 0 2px #53ea93;
    transform: scale(1.05);
  }
`;

// export const ItemName = styled.span`
//   color: #cbd9c6;
//   font-family: sans-serif;
//   font-size: 16px;
//   font-weight: bold;
//   overflow: hidden;
// `;

// export const ItemText = styled.p`
//   color: white;
//   padding-left: 6px;
//   font-family: sans-serif;
//   font-size: 14px;
// `;
// export const ItemSpan = styled(ItemName)`
//   color: #acea96;
//   font-size: 14px;
//   font-weight: normal;
// `;
