import ProjectInterface from './ProjectInterface';

export default interface BlockInterface {
    id: number,
    title: string,
    projects: ProjectInterface[],
}
