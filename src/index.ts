import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('Darwin');
const linkedList = new LinkedList();
[15, 3, -2, 0, 2, -10, 99, 0].forEach((number: number): void => linkedList.add(number));
linkedList.print();
const numberSorter = new Sorter(numbersollection);
const stringSorter = new Sorter(charactersCollection);
const linkedListSorter = new Sorter(linkedList);
numberSorter.sort();
console.log(numbersollection.data);
stringSorter.sort();
console.log(charactersCollection.data);
linkedListSorter.sort();
linkedList.print();
