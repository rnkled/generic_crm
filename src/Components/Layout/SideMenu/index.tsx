import React, {useContext, useState} from 'react';
import { Container, ContainerLogo, BoxLogo, ContainerMenu, BoxTitle, Title, AnimationWrapper } from './styles';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { SlPeople } from 'react-icons/sl';
import {GiReceiveMoney, GiCardKingClubs} from 'react-icons/gi';
import { ReactThemeContext } from '../../../Context/ThemeContext';
import SideMenuItem from '../SideMenuItem';
const SideMenu: React.FC = () => {


  const { theme } = useContext(ReactThemeContext);
  const [selected, setSelected] = useState('dashboard');

  function setCurrentLocation(local: string) {
    setSelected(local);
  }

  return <Container>
    <ContainerLogo>
      <BoxLogo>
        <AnimationWrapper>
          <GiCardKingClubs size={40} color={theme.colors.primary}/>
        </AnimationWrapper>
      </BoxLogo>
      <BoxTitle>
        <Title>Generic CRM</Title>
      </BoxTitle>
    </ContainerLogo>
    <ContainerMenu>
      <SideMenuItem title="Tasksboard" setLocation={setCurrentLocation} selected={selected} icon={<MdOutlineSpaceDashboard size={25} color={'inherit'}/>}/>
      <SideMenuItem title="People" setLocation={setCurrentLocation} selected={selected} icon={<SlPeople size={25} color={'inherit'}/>}/>
      <SideMenuItem title="Finances" setLocation={setCurrentLocation} selected={selected} icon={<GiReceiveMoney size={25} color={'inherit'}/>}/>
    </ContainerMenu>


  </Container>;
}

export default SideMenu;