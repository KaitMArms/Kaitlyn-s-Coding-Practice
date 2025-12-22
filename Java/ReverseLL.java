// Reverses a singly linked list

class ListNode{
    int val;
    ListNode next;
    ListNode(int x) {val = x;}
}

public class ReverseLL {
    static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode cur = head;

        while(cur != null){
            ListNode next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
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

        System.out.println("Original: ");
        printList(head);

        head = reverseList(head);

        System.out.print("Reversed: ");
        printList(head);
    }
}