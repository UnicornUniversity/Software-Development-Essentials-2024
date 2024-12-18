// Define Node and Edge classes
class Node {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Edge {
    constructor(node_from, node_to, price) {
        this.node_from = node_from;
        this.node_to = node_to;
        this.price = price;
    }
}

// Nodes
const allNodes = [
    new Node(1, "Ore Mine"),
    new Node(2, "Blacksmith"),
    new Node(3, "Tavern"),
    new Node(4, "Well"),
    new Node(5, "House"),
    new Node(6, "Statue"),
    new Node(7, "Church"),
    new Node(8, "Foundry")
];

// Edges
const allEdges = [
    new Edge(1, 2, 9),
    new Edge(1, 3, 2),
    new Edge(2, 4, 4),
    new Edge(3, 4, 3),
    new Edge(3, 5, 5),
    new Edge(5, 6, 6),
    new Edge(4, 6, 6),
    new Edge(4, 7, 8),
    new Edge(6, 8, 4)
];

// Helper functions
function getEdgesForNode(nodeId, edges) {
    return edges.filter(edge => edge.node_from === nodeId || edge.node_to === nodeId);
}

function getAnotherNodeForEdge(nodeId, edge) {
    return edge.node_from === nodeId ? edge.node_to : edge.node_from;
}

function notIn(collection, item) {
    return !collection.includes(item);
}

function filterChildrenByHistory(nodeId, edges, history) {
    return edges.filter(edge => notIn(history, getAnotherNodeForEdge(nodeId, edge)));
}

// DFS implementation
const routes = [];

function processNode(nodeId, history, edges, targetNodeId) {
    const historyUpdated = [...history, nodeId];
    const edgesFromThisNode = getEdgesForNode(nodeId, edges);
    const childrenToGo = filterChildrenByHistory(nodeId, edgesFromThisNode, historyUpdated);

    console.log(`node_id = ${nodeId}; history_updated =`, historyUpdated);

    if (nodeId === targetNodeId) {
        routes.push(historyUpdated);
    } else {
        for (const child of childrenToGo) {
            processNode(getAnotherNodeForEdge(nodeId, child), historyUpdated, edges, targetNodeId);
        }
    }

    return historyUpdated;
}

// Start and target nodes
const startNode = 1;
const targetNode = 8;

processNode(startNode, [], allEdges, targetNode);

console.log("routes:", routes);

function getNodeById(nodeId, nodes) {
    return nodes.find(node => node.id === nodeId);
}

function getEdgeForNodes(node1Id, node2Id, edges) {
    return edges.find(
        edge =>
            (edge.node_from === node1Id && edge.node_to === node2Id) ||
            (edge.node_to === node1Id && edge.node_from === node2Id)
    );
}

function calculateRoute(route, nodes, edges) {
    let priceTotal = 0;
    let path = "";

    for (let index = 0; index < route.length - 1; index++) {
        const nodeId = route[index];
        const nodeNextId = route[index + 1];
        const nodeName = getNodeById(nodeId, nodes).name;
        const nodeNameNext = getNodeById(nodeNextId, nodes).name;
        const edge = getEdgeForNodes(nodeId, nodeNextId, edges);
        const price = edge.price;

        path += `${nodeName} > ${nodeNameNext} [${price}] | `;
        priceTotal += price;
    }

    return [path, priceTotal, route.length];
}

const routesCalculated = routes.map(route => calculateRoute(route, allNodes, allEdges));

console.log("routes calculated:");
routesCalculated.forEach(route => console.log(route));
