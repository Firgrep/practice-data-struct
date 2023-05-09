"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.load = void 0;
const Queue_1 = __importDefault(require("../../DataStructures/Queue/Queue"));
const load = (flights) => {
    const runway = new Queue_1.default(3);
    flights.forEach(flight => {
        try {
            runway.enqueue(flight);
            console.log(`${flight} taxi to runway.`);
        }
        catch (e) {
            console.log('Runway full!');
        }
    });
    return runway;
};
exports.load = load;
const clear = (runway) => {
    while (!runway.isEmpty()) {
        const cleared = runway.dequeue();
        console.log('\nFlights wait...\n');
        console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
    }
    console.log('\nAll planes took off, runway clear.');
};
exports.clear = clear;
