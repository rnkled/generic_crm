import styled from 'styled-components';
import ThemeInterface from '../../../Interfaces/ThemeInterface';
import { Link } from "react-router-dom";

interface Props {
    active?: boolean | string;
    theme? : ThemeInterface;
}


export const Container = styled(Link)<Props>`
    height: 40px;
    width: ${({active}) => active == 'true' ? 'calc(100% - 8px)' : '100%'};
    padding: 0 5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-left: ${({active, theme}) => active == 'true' ? `8px solid ${theme.colors.primary}` : 'none'};

    &:hover{
        border-left: ${({active, theme}) => active == 'true' ? `8px solid ${theme.colors.primary}` : `6px solid ${theme.colors.secondary}`};
        width: ${({active}) => active == 'true' ? 'calc(100% - 8px)' : 'calc(100% - 6px)'};
        transition: width 0.1s ease-in-out;
        transition: border 0.1s ease-in-out;
    }
`;

export const Title = styled.p<Props>`
    color: ${({active, theme}) => active ? `${theme.colors.textPrimary}` : `${theme.colors.textSecondary}`};
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
    width: 110px;
`;

export const IconBox = styled.div<Props>`
    position: relative;
    top: 3px;
    color: ${({active, theme}) => active ? `${theme.colors.primary}` : `${theme.colors.textSecondary}`};
`;
