import {dfs} from './DFS.js';
import {bfs} from './BFS.js';
import {undirectedPath} from  './UndirectedPath.js';
import {connectedComponentsCount}  from './ConnectedComponentsCount.js';
import {largestComponent}  from './LargestComponent.js';
import {shortestPath}  from './ShortestPath.js';
import {islandCount} from './islandCount.js';
import {smallestIslandCount} from './SmallestIslandCount.js';


console.log('BFS')
bfs();
console.log('DFS')
dfs();

console.log('DFS')
console.log(undirectedPath([
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "E"],
    ["D", "E"],
    ["D", "F"],
    ["E", "F"]
], "A", "E"))


let edges = [
    // Component 1
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],

    // Component 2
    ["E", "F"],

    // Component 3 (Isolated Node)
    // "G" has no edges, so it's not included in the list
];

console.log(connectedComponentsCount(edges))

console.log('largestComponent')
console.log(largestComponent(edges))


console.log('shortestPath')
edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "C"],
    ["B", "D"],
    ["C", "E"],
    ["D", "E"],
    ["D", "F"],
    ["E", "F"]
];

const source = "A";
const destination = "F";

console.log(shortestPath(edges,source,destination))


console.log('islandCount');
let grid = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "L"],
    ["W", "W", "L", "W", "L"],
    ["W", "W", "W", "L", "L"]
];

console.log(islandCount(grid));


console.log('smallestIslandCount');
grid = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "L"],
    ["W", "W", "L", "W", "L"],
    ["W", "W", "W", "L", "L"]
];

console.log(smallestIslandCount(grid));
