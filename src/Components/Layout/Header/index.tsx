import React, {useContext, useState} from 'react';
import { DateTime } from "luxon";
import ClipLoader from "react-spinners/ClipLoader";
import { Container, Date, RightBox, Spacer, UserTitle, UserIcon } from './styles';
import { ReactThemeContext } from '../../../Context/ThemeContext';
import { MdOutlineNotificationsNone, MdOutlineNotificationsActive } from 'react-icons/md';

const Header: React.FC = (props) => {

  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATE_FULL);  

  const { theme } = useContext(ReactThemeContext);

  const [notification, setNotification] = useState(true);

  return (
      <Container>
        <Spacer/>
        <Date>{date}</Date>
        <RightBox>
          {notification ? 
            <MdOutlineNotificationsActive size={30} color={theme.colors.textSecondary} /> : 
            <MdOutlineNotificationsNone size={30} color={theme.colors.textSecondary}/> 
          }
          <UserTitle>Kener Wendel</UserTitle>
          <UserIcon 
            src={['https://avatars.githubusercontent.com/u/57227267?v=4', 'https://cdn-icons-png.flaticon.com/512/3106/3106807.png']}
            loader={<ClipLoader color={theme.colors.textPrimary} loading={true} size={15} aria-label="Loading Spinner"/>}
          />
        </RightBox>
      </Container>);
}

export default Header;


