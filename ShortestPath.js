const shortestPath = (edges,source,destination) => {
    const graph  = AdjacencyList(edges);
    console.log({graph})

    const visited = new Set();
    let smallestDistance = Infinity

    
    const queue = [[source,0]]
    while(queue.length > 0){
        let [current,distance] = queue.shift();
        if(!visited.has(current)){
            visited.add(current);
            if(current === destination && distance < smallestDistance)
                smallestDistance = distance;
            for(const nei of graph[current]){
                if(!visited.has(nei))
                    queue.push([nei,distance+1]);
            }
        }
    }

    return smallestDistance;
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


export { shortestPath }