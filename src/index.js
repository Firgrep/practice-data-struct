import SinglyLinkedList from "./SinglyLinkedList/SinglyLinkedList.js";
import DoublyLinkedList from "./DoublyLinkedList/DoublyLinkedList.js";

// const seasons = new SinglyLinkedList();
// seasons.printList();

// seasons.addToHead('summer');
// seasons.addToHead('spring');
// seasons.printList();

// seasons.addToTail('fall');
// seasons.addToTail('winter');
// seasons.printList();

// seasons.removeHead();
// seasons.printList();

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
