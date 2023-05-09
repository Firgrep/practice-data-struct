import DoublyLinkedList from "../src/DataStructures/DoublyLinkedList/DoublyLinkedList.js";


// === TESTING DOUBLY LINKED LIST ===
const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList(); 

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList(); 

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');
subway.printList(); 