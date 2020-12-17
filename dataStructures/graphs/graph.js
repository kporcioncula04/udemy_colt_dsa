//undirected graph for now

class Graph{
  constructor(){
    this.adjacenyList = {}
  }

  addVertex(vertex){
    if(!this.adjacenyList[vertex]) this.adjacenyList[vertex] = []
  }
}

let graph = new Graph()
graph.addVertex('hello')
graph.addVertex('hi')
console.log(graph)
