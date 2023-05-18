# practice-data-struct-and-algorithms
Playground to practice Data Structures and Algorithms in TypeScript / JavaScript. The code is written in TS and then compiled using `tsc` into JS.

Exercises come initially from Codecademy's courses on Linear and Complex Data Structures and Algorithms in JS. They have been slightly modified wherever necessary to make them work in TS.

## Requirements

`Node.js` installation required.

`TypeScript` required. Use npm to install globally: `npm install -g typescript`. 

For more options, please see [TypeScript Downloads](https://www.typescriptlang.org/download)

## Setup

Fork and clone the repo `git clone https://github.com/Firgrep/practice-data-struct.git`

Enter `npm start` to run the script from src/index.js

## Tests

`npm run quicklarge` Tests the Quicksort algorithm with a large dataset. 

`npm run quickrandom` Tests the Quicksort algorithm with a small but randomized dataset. 

`npm run merge` Tests the Merge Sort algorithm. 

`npm run bubble` Tests the Bubble Sort algorithm. 

`npm run randomheap` Tests the Min Heap Data Structure with some randomized elements. 

`npm run tenthousand` Tests the Min Heap Data Structure with 10 000 elements. 

`npm run menu` Tests the Trees (TreeNode) Data Structure

`npm run bird` Tests the HashMap Data Structure

`npm run pizza` Tests the Stack Data Structure

`npm run runway` Tests the Queue Data Structure

`npm run nyc` Tests the Doubly Linked List

## Future

Could be cool to automate these tests with Mocha or Jest, if only to just to get a better feel for those techniques. 
