const connectedComponentsCount = (edges) => {
    const graph  = AdjacencyList(edges);
    console.log({graph})

    const visited = new Set();
    let count = 0
    for(const node in graph){
        if(visited.has(node))
            continue;
        const stack = [node];
        while(stack.length > 0){
            const current = stack.pop();
            visited.add(current);
            for(const nei of graph[current]){
                if(!visited.has(nei))
                    stack.push(nei);
            }
        }
        count++;
    }
    
    
    return count;
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


export { connectedComponentsCount }