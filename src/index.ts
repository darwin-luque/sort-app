import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('Darwin');
const numberSorter = new Sorter(numbersollection);
const stringSorter = new Sorter(charactersCollection);
numberSorter.sort();
stringSorter.sort();
console.log(numbersollection.data);
console.log(charactersCollection.data);