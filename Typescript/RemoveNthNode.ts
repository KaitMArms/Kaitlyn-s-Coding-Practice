/* Remove the N-th node from the end of a linked list in one pass
Input: LL Head & int n Output: modified head
 */

// ListNode is written in ReverseLL
class RemoveNthNodeProblem {
    RemoveNthNode(head: ListNode | null, n: number): ListNode | null {
        let tmp: ListNode = new ListNode(0, head);
        let prev: ListNode | null = tmp;
        let cur: ListNode | null = tmp;

        while (n > 0 && cur) {
            cur = cur.next;
            n--;
        }

        while (cur && cur.next) {
            cur = cur.next;
            prev = prev!.next;
        }

        prev!.next = prev!.next!.next;
        return tmp.next;
    }

    printList(head: ListNode | null): void {
        let cur: ListNode | null = head;
        let output = "";
        while (cur) {
            output += cur.val + " ";
            cur = cur.next;
        }
        console.log(output.trim());
    }
}

(function main(): void {
    let head: ListNode | null =
        new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(
                        4,
                        new ListNode(
                            5,
                            new ListNode(6)
                        )
                    )
                )
            )
        );

    const llUtils = new RemoveNthNodeProblem();
    let n: number = 3;

    console.log("Original:");
    llUtils.printList(head);

    head = llUtils.RemoveNthNode(head, n);

    console.log("Modified:");
    llUtils.printList(head);
})();