import Node from '../Node/Node';

class SinglyLinkedList {
    head: Node | null;
    data: any;

    constructor() {
        this.head = null;
    }

    addToHead(data: any) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data: any) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            return;
        }

        let tail: Node | null = null;
        let current: Node | null = this.head;
        
        while(current) {
            tail = current;
            current = current.getNextNode();
        }
        if(tail) {
            tail.setNextNode(newNode);
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

export default SinglyLinkedList;
