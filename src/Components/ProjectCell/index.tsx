import React from 'react';

import { Container } from './styles';
import ProjectInterface from '../../Interfaces/ProjectInterface';

interface Props {
    project: ProjectInterface;
}
const ProjectCell = ({project} :Props) => {
  return (
    <Container>
        {project.title}
    </Container>
  );
}

export default ProjectCell;