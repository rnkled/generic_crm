import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.backgroundContrast};
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

interface ColumnProps {
    width?: string;
}

export const Column = styled.div<ColumnProps>`   
    width: ${props => props.width ? props.width : '100%'};
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContainerContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;
export const LeftSpacer = styled.div`
    width: 17.8%;
    min-width: 200px;
    height: 100%;
`