import React from 'react';
import { Container, ContainerContent, LeftSpacer } from './styles';
import Header from '../../Components/Layout/Header';
import SideMenu from '../../Components/Layout/SideMenu';
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Container>
        <Header />
        <SideMenu />
        <ContainerContent>
          <LeftSpacer />
          <Outlet />
        </ContainerContent>
    </Container>
  );
}

export default Layout;