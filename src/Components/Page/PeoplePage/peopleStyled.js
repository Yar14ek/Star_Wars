import styled from 'styled-components';

export const Content = styled.div`
  min-height: 88vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 0.9643207624846813) 15%,
    rgba(48, 54, 62, 1) 69%
  );
  border: 3px solid #afaf9c;
`;

export const ItemName = styled.span`
  color: #cbd9c6;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
`;

export const ItemText = styled.p`
  color: white;
  padding-left: 6px;
  font-family: sans-serif;
  font-size: 14px;
`;
export const ItemSpan = styled(ItemName)`
  color: #acea96;
  font-size: 14px;
  font-weight: normal;
`;
