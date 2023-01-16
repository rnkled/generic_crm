import React, {useState, useContext, useEffect} from 'react';
import { ReactThemeContext } from '../../../Context/ThemeContext';
import { Container, Title, IconBox } from './styles';


interface SideMenuItemProps {
    title: string;
    icon: React.ReactNode;
    selected: string;
    setLocation: (local: string) => void;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({title, icon, selected, setLocation}) => {

    const {theme} = useContext(ReactThemeContext);
    const [active, setActive] = useState(true);
    const link = title.toLowerCase().trim();

    useEffect(() => {
        if(selected === link) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [selected, link]);

  return (
    <Container to={link} active={active.toString()} theme={theme} onClick={() => setLocation(link)}>
        <IconBox active={active} theme={theme}>
            {icon}
        </IconBox>
        <Title active={active} theme={theme}>
            {title}
        </Title>
    </Container>
    );
}

export default SideMenuItem;