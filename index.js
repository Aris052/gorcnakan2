// function findTwoSum(nums, target) {
// 	const numMap = {}
// 	for (let i = 0; i < nums.length; i++) {
// 		const num = nums[i]
// 		const complement = target - num

// 		if (numMap.hasOwnProperty(complement)) {
// 			return [complement, num]
// 		}

// 		numMap[num] = true
// 	}


// 	return 0
// }

// const nums = [2, 7, 11, 15]
// const target = 18
// console.log(findTwoSum(nums, target))  









// class Node {
// 	constructor(value) {
// 		this.value = value
// 		this.next = null
// 		this.prev = null
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null
// 		this.tail = null
// 	}

// 	addFirst(value) {
// 		const newNode = new Node(value)
// 		if (this.head === null) {
// 			this.head = newNode
// 			this.tail = newNode
// 		} else {
// 			newNode.next = this.head
// 			this.head.prev = newNode
// 			this.head = newNode
// 		}
// 	}

// 	addLast(value) {
// 		const newNode = new Node(value)
// 		if (this.tail === null) { 
// 			this.head = newNode
// 			this.tail = newNode
// 		} else {
// 			newNode.prev = this.tail
// 			this.tail.next = newNode
// 			this.tail = newNode
// 		}
// 	}


// 	removeFirst() {
// 		if (this.head === null) return 
// 		if (this.head === this.tail) { 
// 			this.head = null
// 			this.tail = null
// 		} else {
// 			this.head = this.head.next
// 			this.head.prev = null
// 		}
// 	}


// 	removeLast() {
// 		if (this.tail === null) return 
// 		if (this.head === this.tail) { 
// 			this.head = null
// 			this.tail = null
// 		} else {
// 			this.tail = this.tail.prev
// 			this.tail.next = null
// 		}
// 	}
// }

// const list = new LinkedList()
// list.addFirst(42)
// list.addLast(17)
// list.addLast(64)
// list.addLast(182)



// list.removeLast()
// console.log(list)






// class Node {
// 	constructor(value) {
// 		this.value = value
// 		this.left = null
// 		this.right = null
// 	}
// }


// class BinarySearchTree {
// 	root = null
// 	insert(value) {
// 		let node = new Node(value)
// 		if (!this.root) {
// 			this.root = node
// 			return
// 		}
// 		let current = this.root
// 		while (true) {
// 			if (value < current.value) {
// 				if (current.left == null) {
// 					current.left = node
// 					return
// 				}
// 				current = current.left
// 			} else {
// 				if (current.right == null) {
// 					current.right = node
// 					return
// 				}
// 				current = current.right
// 				return
// 			}

// 		}
// 	}
// }

// let c1 = new BinarySearchTree()
// c1.insert(12)
// c1.insert(3)
// c1.insert(5)
// c1.insert(16)
// c1.insert(13)
// c1.insert(7)
// c1.insert(26)
// console.log(c1)





class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		const newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return
		}
		let current = this.root
		while (true) {
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode
					return
				}
				current = current.left
			} else {
				if (current.right === null) {
					current.right = newNode
					return
				}
				current = current.right
			}
		}
	}

	remove(value) {
		this.root = this._removeNode(this.root, value)
	}

	_removeNode(node, value) {
		if (!node) return null

		if (value < node.value) {
			node.left = this._removeNode(node.left, value)
		} else if (value > node.value) {
			node.right = this._removeNode(node.right, value)
		} else {
			if (!node.left) return node.right
			if (!node.right) return node.left

			let minRight = node.right
			while (minRight.left) minRight = minRight.left
			node.value = minRight.value
			node.right = this._removeNode(node.right, minRight.value)
		}
		return node
	}

	inOrderTraversal() {
		const result = []
		this._traverseInOrder(this.root, result)
		return result
	}

	_traverseInOrder(node, result) {
		if (node) {
			this._traverseInOrder(node.left, result)
			result.push(node.value)
			this._traverseInOrder(node.right, result)
		}
	}
}

const bst = new BinarySearchTree()
bst.insert(12)
bst.insert(3)
bst.insert(5)
bst.insert(16)
bst.insert(13)
bst.insert(7)
bst.insert(26)

console.log(bst.inOrderTraversal())

bst.remove(12)
bst.remove(7)

console.log(bst.inOrderTraversal())
