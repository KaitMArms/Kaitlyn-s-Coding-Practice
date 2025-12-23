/* Remove the N-th node from the end of a linked list in one pass
Input: LL Head & int n Output: modified head
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class RemoveNthNodeProblem {
    RemoveNthNode(head, n) {
        let tmp = new ListNode(0, head)
        let prev = tmp;
        let cur = tmp;

        while (n > 0 && cur) {
            cur = cur.next;
            n--;
        }
        while(cur.next){
            cur = cur.next;
            prev = prev.next;
        }
        prev.next = prev.next.next;
        return tmp.next;
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
    let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
    let n = 3;
    const llUtils = new RemoveNthNodeProblem(); 

    console.log("Original:");
    llUtils.printList(head); 

    head = llUtils.RemoveNthNode(head, n); 

    console.log("Modified:");
    llUtils.printList(head); 
})();