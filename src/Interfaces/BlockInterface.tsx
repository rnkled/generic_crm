import ProjectInterface from './ProjectInterface';

export default interface BlockInterface {
    id: number,
    name: string,
    projects: ProjectInterface[],
}
