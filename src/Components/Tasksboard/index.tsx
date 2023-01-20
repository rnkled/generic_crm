import React, {useEffect, useContext} from 'react';
import { DataContext } from '../../Context/DataContext';
import { Container, BlockContainer } from './styles';
import TasksboardBlock from '../TasksboardBlock';

const Tasksboard: React.FC = () => {

  const { blocks } = useContext(DataContext);

  return (
    <Container>

      <BlockContainer>
        {blocks.map(block => 
          <TasksboardBlock block={block} key={block.id}/>     
        )}
      </BlockContainer>
    </Container>)
}

export default Tasksboard;