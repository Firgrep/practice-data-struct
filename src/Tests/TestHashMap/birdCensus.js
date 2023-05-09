"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HashMap_1 = __importDefault(require("../../DataStructures/HashMap/HashMap"));
const birdCensus = new HashMap_1.default(16);
birdCensus.assign('mandarin duck', 'Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');
console.log(birdCensus.retrieve("mandarin duck"));
console.log(birdCensus.retrieve("monk parakeet"));
console.log(birdCensus.retrieve("horned owl"));
