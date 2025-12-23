// Merge two sorted linked lists into one sorted list

class MergeLLProblemTS {
    MergeLL(head1: ListNode | null, head2: ListNode | null): ListNode | null {
        let tmp: ListNode = new ListNode(0);
        let cur: ListNode = tmp;

        while (head1 !== null && head2 !== null) {
            if (head1.val <= head2.val) {
                cur.next = head1;
                head1 = head1.next;
            } else {
                cur.next = head2;
                head2 = head2.next;
            }
            cur = cur.next;
        }

        if (head1 !== null) {
            cur.next = head1;
        } else if (head2 !== null) {
            cur.next = head2;
        }

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

(function main() {
    let head1: ListNode | null = new ListNode(1, new ListNode(3, new ListNode(5)));
    let head2: ListNode | null = new ListNode(2, new ListNode(4, new ListNode(6)));
    const llUtils = new MergeLLProblemTS();

    console.log("Originals:");
    llUtils.printList(head1);
    llUtils.printList(head2);

    let Result: ListNode | null = llUtils.MergeLL(head1, head2);

    console.log("Merged:");
    llUtils.printList(Result);
})();
