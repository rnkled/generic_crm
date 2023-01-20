import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    background-color: ${props => props.theme.colors.backgroundContrast};    
    width: 100%;
    height: 60px;
    border-radius: 10px;
    padding: 8px 8px;
    margin: 5px 0px;
`;
