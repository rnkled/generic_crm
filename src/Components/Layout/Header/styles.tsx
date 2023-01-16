import styled from 'styled-components';
import {Img} from 'react-image'


export const Container = styled.div`
    background-color : ${props => props.theme.colors.background};
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.1);
    z-index: 100;
`;

export const Spacer = styled.div`
    width: 15%;
    min-width: 250px;
    height: 100%;
`
export const Date = styled.h3`
    color: ${props => props.theme.colors.textSecondary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 240px;
    background-color : ${props => props.theme.colors.background};
`

export const RightBox = styled.div`
    width: 40%;
    min-width: 260px;
    max-width: 400px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color :  ${props => props.theme.colors.background};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 10px;
    
`

export const NotificationIcon = styled.div``

export const UserTitle = styled.p`
    font-weight: bold;
    color: ${props => props.theme.colors.textPrimary};
`

export const UserIcon = styled(Img)`
    width: 50px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
`
