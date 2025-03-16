const graph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: ["F"],
    E: [],
    F: []
};

function bfs(){
    const queue = ["A"];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        queue.push(...graph[current]);
    }
}

export { bfs}