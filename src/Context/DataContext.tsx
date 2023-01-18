import React, { createContext, useState } from "react";
import PersonInterface from "../Interfaces/PersonInterface";
import DataInterface from "../Interfaces/DataInterface";
import BlockInterface from "../Interfaces/BlockInterface";
import ProjectInterface from "../Interfaces/ProjectInterface";




const DataContext = createContext({} as DataInterface);

const DataContextProvider = (props: any) => {
    const [persons, setPersons] = useState<PersonInterface[]>([
         {
                id: 1,
                name: "John Doe",
                email: "",
                phone: "123456789",
            },
            {
                id: 2,
                name: "Jane Doe",
                email: "",
                phone: "123456789",
            },
            {
                id: 3,
                name: "John Smith",
                email: "",
                phone: "123456789",
            },
            {
                id: 4,
                name: "Jane Smith",
                email: "",
                phone: "123456789",
            }
    ]);
    const [blocks, setBlocks] = useState<BlockInterface[]>([
        {
            id: 1,
            name: "Block 1",
            projects: [
                {
                    id: 1,
                    name: "Project 1",
                    description: "Project 1 description",
                    tasks: [],
                    members: ['1', '2'],
                    blockId: "1",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
                {
                    id: 2,
                    name: "Project 2",
                    description: "Project 2 description",
                    tasks: [],
                    members: ['3', '4'],
                    blockId: "1",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
            ],
        },
        {
            id: 2,
            name: "Block 2",
            projects: [
                {
                    id: 3,
                    name: "Project 3",
                    description: "Project 3 description",
                    tasks: [],
                    members: ['1', '2'],
                    blockId: "2",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
                {
                    id: 4,
                    name: "Project 4",
                    description: "Project 4 description",
                    tasks: [],
                    members: ['3', '4'],
                    blockId: "2",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
            ],
        },
        {
            id: 3,
            name: "Block 3",
            projects: [
                {
                    id: 5,
                    name: "Project 5",
                    description: "Project 5 description",
                    tasks: [],
                    members: ['1', '2'],
                    blockId: "3",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
                {
                    id: 6,
                    name: "Project 6",
                    description: "Project 6 description",
                    tasks: [],
                    members: ['3', '4'],
                    blockId: "3",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
            ],
        },
        {
            id: 4,
            name: "Block 4",
            projects: [
                {
                    id: 7,
                    name: "Project 7",
                    description: "Project 7 description",
                    tasks: [],
                    members: ['1', '2'],
                    blockId: "4",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
                {
                    id: 8,
                    name: "Project 8",
                    description: "Project 8 description",
                    tasks: [],
                    members: ['3', '4'],
                    blockId: "4",
                    createdAt: "2020-10-10",
                    updatedAt: "2020-10-10",
                } as ProjectInterface,
            ],
        }
    ]);

    return (
        <DataContext.Provider value={{ persons, setPersons, blocks, setBlocks }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;