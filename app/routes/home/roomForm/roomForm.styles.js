import styled from 'styled-components';

export const Input = styled.input`
  font-family: 'Arial';
  font-size: 13px;
  background-color: transparent;
  border: none;
  color: white;
  padding: 15px;
  outline: none;
  width: 100%;
  
  &::placeholder {
    color: white;
  }
`;

export const Form = styled.form`
  margin-top: 10px;
`;
