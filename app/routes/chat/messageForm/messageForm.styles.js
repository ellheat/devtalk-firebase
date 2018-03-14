import styled from 'styled-components';
import { primaryTextColor, primaryBackgroundColor, secondaryBackgroundColor } from '../../../theme/colors';


export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 40px;
  box-shadow: 0px 0px 16px 0px #ccc;
  justify-content: flex-end;
`;

export const Input = styled.input`
  border: 0;
  font-size: 12px;
  outline: none;
  padding: 0 7px;
  width: 90%;
`;

export const SendButton = styled.button`
  width: 120px;
  background-color: #2E2E4F;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryTextColor};
  cursor: pointer;
  transition: background-color 0.25s;
  border: none;
  
  &:hover {
    background-color: #2E2E4F;
  }
`;
