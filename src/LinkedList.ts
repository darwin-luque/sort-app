class Node {
  next: Node|null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node|null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    let output = 0;
    let tail = this.head;
    while (tail) {
      output++;
      tail = tail.next;
    }
    return output;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head
    while(node) {
      if (index === counter) {
        return node;
      }
      counter ++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('List is empty');
    }
    let node: Node | null = this.head;
    if (node.next) {
      if (leftIndex === 0) {
        const nextNode = node.next;
        node.next = nextNode.next;
        nextNode.next = node;
        this.head = nextNode;
        return;
      }
      let counter = 0;
      while (node.next) {
        if (counter + 1 === leftIndex) {
          const nextNode = node.next;
          if (nextNode.next) {
            node.next = nextNode.next;
            nextNode.next = node.next.next;
            node.next.next = nextNode;
          }
          return;
        }
        node = node.next;
        counter++;
      }
  }
    throw new Error('Index out of bounds');
  }
  
  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node|null = this.head;
    let printStatement = '';
    while (node) {
      printStatement += `${node.data} => `;
      node = node.next;
    }
    console.log(printStatement);
  }
}