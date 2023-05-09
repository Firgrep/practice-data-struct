"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.load = void 0;
var Queue_1 = require("../../DataStructures/Queue/Queue");
var load = function (flights) {
    var runway = new Queue_1.default(3);
    flights.forEach(function (flight) {
        try {
            runway.enqueue(flight);
            console.log("".concat(flight, " taxi to runway."));
        }
        catch (e) {
            console.log('Runway full!');
        }
    });
    return runway;
};
exports.load = load;
var clear = function (runway) {
    while (!runway.isEmpty()) {
        var cleared = runway.dequeue();
        console.log('\nFlights wait...\n');
        console.log("".concat(cleared, ", is cleared for takeoff!\n").concat(cleared, " in air."));
    }
    console.log('\nAll planes took off, runway clear.');
};
exports.clear = clear;
