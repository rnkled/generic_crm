import React from 'react';

import { Container, Title } from './styles';
import Block from '../../Interfaces/BlockInterface'
import ProjectCell from '../ProjectCell';

interface Props {
    children?: JSX.Element | JSX.Element[];
    block: Block;
}

const TasksboardBlock = ({block} :Props) => {
  return <Container>
    <Title>{block.title}</Title>
    {block.projects.map(project =>
        <ProjectCell project={project} key={project.id}/>
    )}
  </Container>;
}

export default TasksboardBlock;