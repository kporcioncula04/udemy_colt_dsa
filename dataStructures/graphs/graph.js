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
}

let graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Aspen')
graph.addVertex('Los Angeles')
graph.addVertex('Hong Kong')
graph.addEdge('Dallas', 'Tokyo')
graph.addEdge('Dallas', 'Aspen')
graph.addEdge('Hong Kong', 'Tokyo')
graph.addEdge('Hong Kong', 'Dallas')
graph.addEdge('Los Angeles', 'Hong Kong')
graph.addEdge('Los Angeles', 'Aspen')
graph.removeVertex('Hong Kong')

console.log(graph)
