function augmentingPath(graph, start, end) {
    if (start == end) return [start];
    if (start !in graph) return [];
    let flow = {};
     for (let edge in graph) {
        flow[edge] = 0; 
    }
    
    let visited = new Set();
    let path = [];
    function search (current){
        if (current == end) return true;
        visited.add(current);

        for(let next in graph[current]){
            if(next !in visited){
                path.append(next);
                if(search(next)) return true;
                path.pop;
            }
        }
        return false
    }
    path.append(start);
    if(search(end)) return path;
    
    return [];
}
