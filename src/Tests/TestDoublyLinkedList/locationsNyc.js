"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("../../DataStructures/DoublyLinkedList/DoublyLinkedList");
// === TESTING DOUBLY LINKED LIST ===
var subway = new DoublyLinkedList_1.default();
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
