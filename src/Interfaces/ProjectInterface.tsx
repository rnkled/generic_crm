export default interface ProjectInterface {
    id: number,
    title: string,
    description: string,
    tasks: string[],
    members: string[],
    blockId: string,
    createdAt: string,
    updatedAt: string,
}