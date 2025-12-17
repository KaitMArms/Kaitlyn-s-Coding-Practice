/*You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/

class TwoNumsLL {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode res = new ListNode(0);
        ListNode current = res;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;

            int sum = val1 + val2 + carry;
            carry = sum / 10;

            current.next = new ListNode(sum % 10);
            current = current.next;

            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        return res.next;
    }

    public class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public static void main(String[] args) {
        TwoNumsLL twoNums = new TwoNumsLL();
        TwoNumsLL.ListNode l1 = twoNums.new ListNode(2);
        l1.next = twoNums.new ListNode(4);
        l1.next.next = twoNums.new ListNode(3);

        TwoNumsLL.ListNode l2 = twoNums.new ListNode(5);
        l2.next = twoNums.new ListNode(6);
        l2.next.next = twoNums.new ListNode(4);

        TwoNumsLL.ListNode sumList = twoNums.addTwoNumbers(l1, l2);
        System.out.print("Sum of linked lists: ");
        while (sumList != null) {
            System.out.print(sumList.val + " ");
            sumList = sumList.next;
        }
        System.out.println();
    }
}

