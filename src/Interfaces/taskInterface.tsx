export default interface TaskInterface {
    id: number,
    name: string,
    description: string,
    members: string[],
    projectId: string,
    createdAt: string,
    updatedAt: string,
}