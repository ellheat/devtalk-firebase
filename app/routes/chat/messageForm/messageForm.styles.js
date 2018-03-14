import styled from 'styled-components';
import { primaryTextColor, primaryBackgroundColor, secondaryBackgroundColor } from '../../../theme/colors';


export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 40px;
  border-top: 1px solid #2E2E4F;
  justify-content: flex-end;
`;

export const Input = styled.input`
  width: 90%;
  outline: none;
  padding: 0 7px;
  border: 0;
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
