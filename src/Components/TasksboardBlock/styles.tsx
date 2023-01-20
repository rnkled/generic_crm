import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    min-width: 200px;
    min-height: 200px;
    height: auto;
    background-color: ${props => props.theme.colors.background};
    border-radius: 10px;  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    padding: 15px;
    margin: 10px;
    box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    margin-bottom: 10px;
`;