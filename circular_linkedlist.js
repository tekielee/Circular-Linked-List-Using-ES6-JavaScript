class ListNode {
	constructor(data = null) {
		this.data = data;
		this.next = null;
	}
}

class CircularLinkedList {
	constructor() {
		this.firstNode = null;
		this.totalNode = 0;
	}
	
	insertAtEnd(data) {
		let newNode = new ListNode(data);
		
		if(this.firstNode === null) {
			this.firstNode = newNode;
		} else {
			let currentNode = this.firstNode;
			while(currentNode.next !== this.firstNode) {
				currentNode = currentNode.next;
			}
			currentNode.next = newNode;
		}
		newNode.next = this.firstNode;
		this.totalNode++;
		
		return true;
	}
	
	display() {
		console.log('Total book titles: ' + this.totalNode);
		
		let currentNode = this.firstNode;
		while (currentNode.next !== this.firstNode) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
		if(currentNode) {
			console.log(currentNode.data);
		}
	}
}

const bookTitles = new CircularLinkedList();
bookTitles.insertAtEnd('Introduction to Algorithm');
bookTitles.insertAtEnd('Introduction to JavaScript and Data Structures');
bookTitles.insertAtEnd('Programming Intelligence');
bookTitles.display();