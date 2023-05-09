"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runway_1 = require("./runway");
const flights = [
    'Botswana Bird flight #345',
    'Singapore Skies flight #890',
    'Mexico Mirage flight #234',
    'Greenland Flying Seals flight #567'
];
// Enqueue runway with planes
const departing = (0, runway_1.load)(flights);
// Clear each plane to takeoff
(0, runway_1.clear)(departing);
