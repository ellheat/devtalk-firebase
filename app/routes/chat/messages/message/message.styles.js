import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  transition: background-color 0.3s ease;
  font-family: 'Arial';
  margin: 20px;
  
  &:hover {
    background-color: #fff;
  }
`;

export const Content = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 0; 
    height: 0; 
    border-top: 0 solid transparent;
    border-bottom: 10px solid transparent; 
    border-right:10px solid #f6f6f6;
    top: 0;
    left: -10px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 25px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Author = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-right: 12px;
`;

export const Meta = styled.div`
  flex: 0 1 auto;
  align-items: center;
  display: flex;
  margin-bottom: 4px;
`;

export const Timestamp = styled.span`
  color: #666;
  font-size: 12px;
`;

export const Text = styled.div`
  font-size: 14px;
  flex: 0 1 auto;
  margin-top: 10px;
`;
