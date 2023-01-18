import React, {useContext, useEffect, useState} from 'react';

import { Container, RightContainer } from './styles';

const People: React.FC = () => {

  const [isRightOpen, setIsRightOpen] = useState(true);

  return <>
    <Container onClick={() => setIsRightOpen(!isRightOpen)} isRightOpen={isRightOpen}>
      <h1>People</h1>
    </Container>
    <RightContainer isRightOpen={isRightOpen}>
      <h1>Right</h1>
    </RightContainer>
  </>
}

export default People;