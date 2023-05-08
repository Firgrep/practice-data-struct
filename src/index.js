import SinglyLinkedList from "./DataStructures/SinglyLinkedList/SinglyLinkedList.js";


// === TESTING SINGLY LINKED LIST ===
const seasons = new SinglyLinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();
