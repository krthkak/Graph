const undirectedPath = (edges, nodeA, nodeB) => {
    const graph  = AdjacencyList(edges);
    console.log({graph})
    const visited = new Set();
    const stack = [nodeA];
    while(stack.length > 0){
        const current = stack.pop();
        if(current === nodeB)
                return true
        visited.add(current);
        for(const nei of graph[current]){
            if(!visited.has(nei))
                stack.push(nei);
        }
    }
    return false;
} 

function AdjacencyList(edges) {
  const list = {};
  edges.forEach(element => {
    const [i,j] = element;
    if(list[i]) {
      list[i].push(j);
    } else {
      list[i] = [j];
    }
    if(list[j]) {
      list[j].push(i);
    }
    else {
      list[j] = [i];
    }
  });
  return list
}


export { undirectedPath }
