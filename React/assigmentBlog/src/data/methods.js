export const methods = [
  {
    id: "push",
    title: "push()",
    definition: "Adds one or more elements to the end of an array.",
    syntax: "arr.push(element1, element2)",
    example: `
const arr = [1,2,3];

arr.push(4,5);

console.log(arr);
`,
    output: "[1,2,3,4,5]",
    before: [1, 2, 3],
    after: [1, 2, 3, 4, 5],
    operation: "push(4,5)",
    returnValue: 5,
    highlightAfter: [3, 4]
  },

  {
    id: "pop",
    title: "pop()",
    definition: "Removes the last element.",
    syntax: "arr.pop()",
    example: `const arr = [1,2,3];
arr.pop();`,
    output: "[1,2]",
    before: [1,2,3],
    after: [1,2],
    operation: "pop()",
    returnValue: 3
  },

  {
    id: "shift",
    title: "shift()",
    definition: "Removes first element.",
    syntax: "arr.shift()",
    example: `const arr = [1,2,3];
arr.shift();`,
    output: "[2,3]",
    before: [1,2,3],
    after: [2,3],
    operation: "shift()",
    returnValue: 1
  },
  
  {
  id: "unshift",
  title: "unshift()",
  definition: "Adds one or more elements to the beginning of an array.",
  syntax: "arr.unshift(0)",
  example: `const arr = [1,2,3];
arr.unshift(0);`,
  output: "[0,1,2,3]",
  before: [1,2,3],
  after: [0,1,2,3],
  operation: "unshift(0)",
  returnValue: 4
},

{
  id: "map",
  title: "map()",
  definition: "Creates a new array by transforming every element.",
  syntax: "arr.map(x => x * 2)",
  example: `const arr = [1,2,3];
const result = arr.map(x => x * 2);`,
  output: "[2,4,6]",
  before: [1,2,3],
  after: [2,4,6],
  operation: "x => x * 2",
  returnValue: [2,4,6]
},

{
  id: "filter",
  title: "filter()",
  definition: "Creates a new array containing elements that satisfy a condition.",
  syntax: "arr.filter(x => x % 2 === 0)",
  example: `const arr = [1,2,3,4,5];
const result = arr.filter(x => x % 2 === 0);`,
  output: "[2,4]",
  before: [1,2,3,4,5],
  after: [2,4],
  operation: "x % 2 === 0",
  returnValue: [2,4]
},

{
  id: "reduce",
  title: "reduce()",
  definition: "Reduces all array elements into a single value.",
  syntax: "arr.reduce((acc, cur) => acc + cur, 0)",
  example: `const arr = [1,2,3,4];
const sum = arr.reduce(
  (acc, cur) => acc + cur,
  0
);`,
  output: "10",
  before: [1,2,3,4],
  after: [10],
  operation: "acc + cur",
  returnValue: 10
},

{
  id: "find",
  title: "find()",
  definition: "Returns the first element that satisfies a condition.",
  syntax: "arr.find(x => x > 2)",
  example: `const arr = [1,2,3,4];
const result = arr.find(x => x > 2);`,
  output: "3",
  before: [1,2,3,4],
  after: [3],
  operation: "x > 2",
  returnValue: 3
},

{
  id: "slice",
  title: "slice()",
  definition: "Returns a shallow copy of a portion of an array.",
  syntax: "arr.slice(1,4)",
  example: `const arr = [1,2,3,4,5];
const result = arr.slice(1,4);`,
  output: "[2,3,4]",
  before: [1,2,3,4,5],
  after: [2,3,4],
  operation: "slice(1,4)",
  returnValue: [2,3,4]
}

];