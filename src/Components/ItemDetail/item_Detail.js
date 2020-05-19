import styled from 'styled-components';

export const buttonStyle = {
  position: 'absolute',
  textDecoration: 'none',
  right: '-50px',
  color: 'white',
  textTransform: 'uppercase',
};
export const ItemBlock = styled.div`
  font-family: sans-serif;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 400px;
  width: 400px;
  border-radius: 10px;
  top: 50px;

  background: rgb(110, 110, 101);
  background: radial-gradient(
    circle,
    rgba(110, 110, 101, 0.8780462868741247) 15%,
    rgba(0, 0, 0, 1) 100%
  );
  box-shadow: -1px -1px 56px 22px rgba(140, 130, 140, 1);
`;

export const Text = styled.p`
  color: white;
  font-size: 20px;
  padding-left: 15px;
  padding-top: 20px;
`;

export const TextContent = styled.span`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
