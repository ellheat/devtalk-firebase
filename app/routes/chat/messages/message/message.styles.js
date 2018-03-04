import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 6px;
  border-bottom: 1px solid #ddd;
  background-color: #f6f6f6;
  transition: background-color 0.3s ease;
  
  &:nth-child(2n) {
    background-color: #f0f0f0;
  }
  
  &:hover {
    background-color: #f1fdd8;
  }
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 15px;
  border-radius: 36px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,.2);
  flex: 0 0 32px;
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
  font-size: 16px;
  flex: 0 1 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
