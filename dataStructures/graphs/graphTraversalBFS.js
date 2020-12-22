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

    //push
    //shift
    //fifo
  bfs(start){
    let queue = [start]
    let visitedArr = []
    let visitedObj = {}
    let firstVertex;

    visitedObj[start] = true

    while(queue.length){
      console.log('queue', queue)
      console.log('result', visitedArr)
      console.log('obj', visitedObj)
      firstVertex = queue.shift()
      visitedArr.push(firstVertex)


      this.adjacenyList[firstVertex].forEach( neighbor => {
        if(!visitedObj[neighbor]){
          visitedObj[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return visitedArr
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

console.log(graph.bfs('a'))

console.log(graph)
