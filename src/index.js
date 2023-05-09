"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SinglyLinkedList_1 = require("./DataStructures/SinglyLinkedList/SinglyLinkedList");
// === TESTING SINGLY LINKED LIST ===
var seasons = new SinglyLinkedList_1.default();
seasons.printList();
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();
seasons.removeHead();
seasons.printList();
