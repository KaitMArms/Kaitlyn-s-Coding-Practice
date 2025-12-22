// Reverses a singly linked list

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class ReverseLL {
    reverseList(head) {
        let prev = null;
        let cur = head;

        while (cur) {
            let nextNode = cur.next;
            cur.next = prev;
            prev = cur;
            cur = nextNode;
        }
        return prev;
    }

    printList(head) {
        let cur = head;
        let output = "";
        while (cur) {
            output += cur.val + " ";
            cur = cur.next;
        }
        console.log(output.trim());
    }
}

(function main() {
    let head = new ListNode(1, new ListNode(2, new ListNode(3)));

    const llUtils = new ReverseLL(); 

    console.log("Original:");
    llUtils.printList(head); 

    head = llUtils.reverseList(head); 

    console.log("Reversed:");
    llUtils.printList(head); 
})();