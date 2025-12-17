/*You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/

class ListNode {
    val: number
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const res = new ListNode(0);
    let current = res;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const l1Val = l1 !== null ? l1.val : 0;
        const l2Val = l2 !== null ? l2.val : 0;

        const sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return res.next;
};