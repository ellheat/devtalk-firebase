import styled from 'styled-components';
import { primaryTextColor, primaryBackgroundColor, secondaryBackgroundColor } from '../../../theme/colors';


export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 40px;
  border-top: 1px solid ${primaryBackgroundColor};
`;

export const Input = styled.input`
  width: 90%;
  outline: none;
  padding: 0 7px;
  border: 0;
`;

export const SendButton = styled.button`
  width: 120px;
  background-color: ${primaryBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryTextColor};
  cursor: pointer;
  transition: background-color 0.25s;
  
  &:hover {
    background-color: ${secondaryBackgroundColor};
  }
`;
