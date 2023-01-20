export default interface TaskInterface {
    id: number,
    title: string,
    description: string,
    members: string[],
    projectId: string,
    createdAt: string,
    updatedAt: string,
}