import React from 'react';

import { Container } from './styles';
import TaskInterface from '../../Interfaces/TaskInterface';

interface Props {
    task: TaskInterface;
}

const Task = ({task} :Props) => {
  return (
    <Container>
        {task.title}
    </Container>
    );
}

export default Task;