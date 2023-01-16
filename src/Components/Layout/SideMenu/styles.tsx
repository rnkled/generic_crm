import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    width: 15%;
    height: 100%;
    min-height: 250px;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 25px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    z-index: 200;
`;

export const ContainerLogo = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3%;
    flex-direction: column;
`;  

export const BoxLogo = styled.div`

    width: 40%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundContrast};
    border-radius: 25px;
    margin-bottom: 8%;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
`;

export const AnimationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        animation: slope 1s ease-in-out;
    }
    @keyframes slope {
        0% { 
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(30deg);
        }
        80% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`;

export const BoxTitle = styled.div`
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
`;

export const Title = styled.h1`
    color: ${props => props.theme.colors.textContrast};
    font-size: 18px;
`;

export const ContainerMenu = styled.div`
    width: 100%;
    height: 70%;
    min-height: 150px;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3%;
`;