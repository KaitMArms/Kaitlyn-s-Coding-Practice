/* Remove the N-th node from the end of a linked list in one pass
Input: LL Head & int n Output: modified head
 */
class ListNode{
    int val;
    ListNode next;
    ListNode(int x) {val = x;}
}

public class RemoveNthNodeProblem {
    static ListNode RemoveNthNode(ListNode head, int n){
        ListNode tmp = new ListNode(0);
        tmp.next = head;
        ListNode cur = tmp;
        ListNode prev = tmp;

        while(n > 0){
            cur = cur.next;
            n--;
        }
        while(cur.next != null){
            cur = cur.next;
            prev = prev.next;
        }

        prev.next = prev.next.next;
        return tmp.next;
    }

    static void printList(ListNode head){
        while(head != null){
            System.out.print(head.val + " ");
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        head.next.next.next.next.next = new ListNode(6);
        int n = 3;

        System.out.println("Original: ");
        printList(head);

        head = RemoveNthNode(head, n);

        System.out.print("Modified: ");
        printList(head);
    }
}
