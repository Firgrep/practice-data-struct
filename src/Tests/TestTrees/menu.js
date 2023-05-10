"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../../DataStructures/TreeNode/TreeNode"));
const menu = new TreeNode_1.default('Menu');
const entries = {
    'Breakfast': ['Cereal', 'BBQ Chicken', 'Oatmeal'],
    'Lunch': ['Soup', 'Sandwich', 'Lasagna'],
    'Dinner': ['Yogurt', 'Filet Mignon', 'Fish Florentine']
};
const meals = Object.keys(entries);
for (let meal = 0; meal < meals.length; meal++) {
    menu.addChild(meals[meal]);
    const entrylist = entries[meals[meal]];
    entrylist.forEach(entry => {
        menu.children[meal].addChild(entry);
    });
}
menu.print();
menu.removeChild("BBQ Chicken");
menu.removeChild("Yogurt");
menu.children.forEach(child => {
    if (child.data === "Breakfast") {
        child.addChild("Yogurt");
    }
    if (child.data === "Dinner") {
        child.addChild("BBQ Chicken");
    }
});
// Alternative methods to add:
// menu.children[2].addChild('BBQ Chicken');
// menu.children[0].addChild('Yogurt');
console.log('\n------- Corrected Menu');
menu.print();
menu.depthFirstTraversal();
