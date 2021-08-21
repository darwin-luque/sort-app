import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('Darwin');
const linkedList = new LinkedList();
[15, 3, -2, 0, 2, -10, 99, 0].forEach((number: number): void => linkedList.add(number));
console.log('Sort Numbers Collection')
console.log('Initial: ', numbersCollection.data);
numbersCollection.sort();
console.log('Sorted: ', numbersCollection.data);
console.log('Sort Characters Collection')
console.log('Initial: ', charactersCollection.data);
charactersCollection.sort();
console.log('Sorted: ', charactersCollection.data);
console.log('Sort Linked List')
console.log('Initial: ', linkedList.log());
linkedList.sort();
console.log('Sorted: ', linkedList.log());
