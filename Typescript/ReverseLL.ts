// Reverses a singly linked list

class ListNode{
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class reverseListTS{
    static reverseList(head: ListNode | null): ListNode | null{
        let prev: ListNode | null = null;
        let cur: ListNode | null = head;

        while(cur){
            let nextNode: ListNode | null = cur.next;
            cur.next = prev;
            prev = cur;
            cur = nextNode;
        }
        return prev;
    }

    static printList(head: ListNode | null): void {
        let cur: ListNode | null = head;
        let output = "";
        while (cur) {
            output += cur.val + " ";
            cur = cur.next;
        }
        console.log(output.trim());
    }
}

(function main() {
    let head: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(3)));

    console.log("Original:");
    reverseListTS.printList(head); 

    head = reverseListTS.reverseList(head); 

    console.log("Reversed:");
    reverseListTS.printList(head); 
})();