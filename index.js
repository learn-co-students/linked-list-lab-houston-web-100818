function getName(node) {
    
    return node.name
}

function headNode(linkedList, collection) {
    
    return collection[linkedList]
}

function next(node, collection) {

    return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    let node = collection[linkedList]
    for (let i=0; i<index; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(index, linkedList, collection) {
    if (index == 0) {
        return linkedList
    } else {
        return nodeAt(index-1, linkedList, collection).next
    }
}

function indexAt(node, collection, linkedList) {
    let index = 0
    let currentNode = collection[linkedList];
    while (currentNode != node) {
        currentNode = next(currentNode, collection)
        index++
    }
    return index
}

function insertNodeAt(index, address, linkedList, collection) {
    if (index == 0) {
        collection[address].next = linkedList
    } else {
        collection[address].next = addressAt(index, linkedList, collection)
        collection[addressAt(index-1, linkedList, collection)].next = address
    }    
}

function deleteNodeAt(index, linkedList, collection) {
    const deletedNode = nodeAt(index, linkedList, collection)

    if (index == 0) {

    } else {
        collection[addressAt(index-1, linkedList, collection)].next = deletedNode.next
    }
}