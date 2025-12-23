// Merge two sorted linked lists into one sorted list

class ListNode{
    int val;
    ListNode next;
    ListNode(int x) {val = x;}
}

public class MergeLL {
    static ListNode mergeLL(ListNode head1, ListNode head2) {
        ListNode tmp = new ListNode(0);
        ListNode cur = tmp;

        while(head1 != null && head2 != null){
            if(head1.val <= head2.val){
                cur.next = head1;
                head1 = head1.next;
            }
            else{
                cur.next = head2;
                head2 = head2.next;
            }
            cur = cur.next;
        }

        if(head1 != null) {cur.next = head1;}
        else if(head2 != null) {cur.next = head2;}
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
        ListNode head1 = new ListNode(1);
        head1.next = new ListNode(3);
        head1.next.next = new ListNode(5);
        ListNode head2 = new ListNode(2);
        head2.next = new ListNode(4);
        head2.next.next = new ListNode(6);

        System.out.println("Originals: ");
        printList(head1);
        printList(head2);

        ListNode Result = mergeLL(head1, head2);

        System.out.print("Merged: ");
        printList(Result);
    }
}
