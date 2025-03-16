const graph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: ["F"],
    E: [],
    F: []
};

function dfs(){
    const stack = ["A"];
    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        stack.push(...graph[current]);
    }
}

export { dfs}