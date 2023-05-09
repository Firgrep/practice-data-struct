"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SinglyLinkedList_1 = __importDefault(require("./DataStructures/SinglyLinkedList/SinglyLinkedList"));
// === TESTING SINGLY LINKED LIST ===
const seasons = new SinglyLinkedList_1.default();
seasons.printList();
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();
seasons.removeHead();
seasons.printList();
