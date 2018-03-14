import styled from 'styled-components';
import * as RRD from 'react-router-dom';

export const Link = styled(RRD.Link)`
  display: block;
`;

export const UserPanel = styled.div`
  background-color: #2E2E4F;
  font-family: 'Arial';
  padding: 1% 5%;
`;

export const AvatarImage = styled.img`
  cursor: pointer;
  border-radius: 50%;
  height: 50px;
  position: relative;
  width: 50px;
`;

export const UserName = styled.h1`
  color: white;
  font-size: 12px;
  padding-right: 20px;
`;

export const UserActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  font-weight: bold;
  padding-top: 4px;
  
  &:hover {
    color: #2E2E4F;
  }
`;

export const UserData = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
`;

export const UserMenu = styled.div`
  background-color: white;
  box-shadow: 0 0 10px 0 lightgray;
  padding: 4px;
  position: absolute;
  right: 20px;
  transform: ${props => props.menuOpened ? 'translateY(50px)' : 'translateY(-100px)'};
  transition: transform .25s;
`;

export const MenuItem = styled.div`
  color: black;
  padding: 6px;
`;

export const Sidebar = styled.div`
  background-color: #2E2E4F;
  color: black;
  max-width: 200px;
  height: 100%;
`;

export const RoomButton = styled.button`
  background-color: #3F3F5F;
  border: none;
  border-bottom: 1px solid #2E2E4F;
  color: #DBD9FA;
  cursor: pointer;
  font-family: 'Arial';
  font-size: 13px;
  padding: 15px;
  text-align: left;
  transition: background-color .25s;
  width: 100%;
   
  &:hover {
    background-color: #2E2E4F;
  }
`;
