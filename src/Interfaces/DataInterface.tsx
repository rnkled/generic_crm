import BlockInterface from './BlockInterface';
import PersonInterface from './PersonInterface';

export default interface DataInterface {
    blocks: BlockInterface[],
    persons: PersonInterface[],
    setBlocks: React.Dispatch<React.SetStateAction<BlockInterface[]>>,
    setPersons: React.Dispatch<React.SetStateAction<PersonInterface[]>>,
}

