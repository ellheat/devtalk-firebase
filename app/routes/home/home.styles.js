import styled from 'styled-components';
import * as RRD from 'react-router-dom';

export const HomeComponent = styled.div`
  height: 100%;
`;

export const Link = styled(RRD.Link)`
  display: block;
`;

export const UserPanel = styled.div`
  background-color: #2E2E4F;
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
  color: white;
  cursor: pointer;
  outline: none;
`;

export const LoginView = styled.div`
  background-color: #2E2E4F;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const LoginWindow = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 500px;
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
  flex: 0 0 200px;
  overflow: scroll;
`;

export const RoomButton = styled.button`
  background-color: #3F3F5F;
  border: none;
  border-bottom: 1px solid #2E2E4F;
  color: #DBD9FA;
  cursor: pointer;
  outline: none;
  font-size: 13px;
  padding: 15px;
  text-align: left;
  transition: background-color .25s;
  width: 100%;
   
  &:hover {
    background-color: #2E2E4F;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  width: 100%;

`;
