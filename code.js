function augmentingPath(graph, start, end) {
    if (start == end) return [start];
    if (!(start in graph)) return [];
   /* let flow = {};
     for (let edge in graph) {
        flow[edge] = 0; 
    }*/
    
    let visited = new Set();
    let path = [];
    function search (current){
        if (current == end) return true;
        visited.add(current);

        for (let next of Object.keys(graph[current])) {
            if(!visited.has(next)){
                path.push(next);
                if(search(next)) return true;
                path.pop();
            }
        }
        return false
    }
    
    path.push(start);
    if(search(start)) return path;
    
    return [];
}
