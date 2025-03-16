const smallestIslandCount = (matrix) => {
    const row = matrix.length;
    const col = matrix[0].length;
    const visited = new Set();
    let smallestIslandCount = Infinity;
    
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(matrix[i][j] == 'L' && !visited.has(`${i}-${j}`)){
                let queue = [[i,j]];
                let count = 0;
                while(queue.length>0){
                    let [a,b] = queue.shift();
                    if(!visited.has(`${a}-${b}`)){
                        visited.add(`${a}-${b}`);
                        queue = checkIsland(matrix,a,b,row,col,queue,visited)
                    }
                    count++;
                }
                if(count < smallestIslandCount)
                        smallestIslandCount = count;
            }
        }
    }
    return smallestIslandCount;
} 

function checkIsland(matrix,i,j,row,col,queue,visited){
    if(checkLand(matrix,i+1,j,row,col,visited)) queue.push([i+1,j])
    if(checkLand(matrix,i,j+1,row,col,visited)) queue.push([i,j+1])
    if(checkLand(matrix,i,j-1,row,col,visited)) queue.push([i,j-1])
    if(checkLand(matrix,i-1,j,row,col,visited)) queue.push([i-1,j])
        return queue;

}

function checkLand(matrix,i,j,row,col,visited){
    if(i>=row || i<0 || j>=col || j<0 || visited.has(`${i}-${j}`))
        return false;
    if(matrix[i][j] == 'L'){
        return true
    }
    return false;
}




export { smallestIslandCount }