import styled from 'styled-components';

interface ContainerProps {
  isRightOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({isRightOpen}) => isRightOpen ? '70%' : '100%' };
  height: 100%;
  background-color: green;
`;

export const RightContainer = styled.div<ContainerProps>`
  width: 30%;
  height: 100%;
  background-color: red;
  display: ${({isRightOpen}) => isRightOpen ? 'flex' : 'none' };
  animation: slideIn 1s ease-in;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;