"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = __importDefault(require("../../DataStructures/DoublyLinkedList/DoublyLinkedList"));
// === TESTING DOUBLY LINKED LIST ===
const subway = new DoublyLinkedList_1.default();
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
