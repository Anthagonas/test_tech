const graph = {
    "A": ["B","E"],
    "B": ["A","C","D"],
    "C": ["B","F"],
    "D": ["B"],
    "E": ["A","F"],
    "F": ["C","E"]
}

function exploreGraph(graph, key, neighbors, exploredNodes = []){
    let maxLength = 0;
    exploredNodes.push(key);

    neighbors.filter(v => !exploredNodes.includes(v)).forEach(key => {
        let newLength = exploreGraph(graph, key, graph[key], exploredNodes);
        maxLength = newLength > maxLength ? newLength : maxLength;
    });

    return maxLength + 1;
}

function parseGraph(graph){
    let maxLength = 0;
    Object.keys(graph).forEach(key => {
        let newLength = exploreGraph(graph, key, graph[key]);
        maxLength = newLength > maxLength ? newLength : maxLength;
    });
    return maxLength;
}

console.log(graph);
console.log("depth : "+parseGraph(graph));

//TODO : Complexity