import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 20px;
  padding: 0 20px;
  border: 2px solid #afaf9c;
  background: rgb(110, 110, 101);
  background: radial-gradient(
    circle,
    rgba(110, 110, 101, 0.8780462868741247) 15%,
    rgba(0, 0, 0, 1) 100%
  );
  color: white;
  font-weight: bold;
  .fas {
    color: white;
    font-size: 30px;
    padding: 0 20px;
  }
  &:disabled {
    color: #afaf9c;
    .fas {
      color: #afaf9c;
    }
  }
`;
export const PageNum = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  span {
    text-decoration: underline;
    font-size: 20px;
  }
`;
