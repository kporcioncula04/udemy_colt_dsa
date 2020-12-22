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

  dfsIterative(start){
    let S = [];
    let result = [];
    let visited = {}
    let currvertex;
    S.push(start)
    visited[start] = true

    while(S.length){
      console.log('stack',S)
      console.log('result', result)
      console.log('visited', visited)
      currvertex = S.pop()
      result.push(currvertex)

      this.adjacenyList[currvertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          S.push(neighbor)
        }
      })

    }

    return result;
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

console.log(graph.dfsIterative('a'))

console.log(graph)
