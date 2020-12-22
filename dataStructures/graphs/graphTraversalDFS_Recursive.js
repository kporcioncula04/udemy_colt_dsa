//undirected graph for now

class Graph{
  constructor(){
    this.adjacenyList = {}
  }

  addVertex(vertex){
    if(!this.adjacenyList[vertex]) this.adjacenyList[vertex] = []
  }

  addEdge(vertex1, vertex2){
    this.adjacenyList[vertex1].push(vertex2)
    this.adjacenyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2){
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
      v => v !== vertex2
    )

    this.adjacenyList[vertex2] = this.adjacenyList[vertex1].filter(
      v => v !== vertex2
    )
  }

  removeVertex(vertex){
    while(this.adjacenyList[vertex].length){
      const adjacentVertex = this.adjacenyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacenyList[vertex]
  }

  dfsRecursive(start){
    let arr = []
    let visited = {}
    let adjacenyList = this.adjacenyList;

    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true
      arr.push(vertex)
      adjacenyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      })
    })(start)

    return arr
  }


}

let graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addVertex('e')
graph.addVertex('f')

graph.addEdge('a', 'b')
graph.addEdge('a', 'c')
graph.addEdge('b', 'd')
graph.addEdge('c', 'e')
graph.addEdge('d', 'e')
graph.addEdge('d', 'f')
graph.addEdge('e', 'f')

console.log(graph.dfsRecursive('a'))

console.log(graph)
