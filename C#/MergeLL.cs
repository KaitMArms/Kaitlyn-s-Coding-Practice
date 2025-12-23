// Merge two sorted linked lists into one sorted list
using System;

class MergeLLProblem
{
    public static void Run()
    {
        ListNode head1 = new ListNode(1, new ListNode(3, new ListNode(5)));
        ListNode head2 = new ListNode(2, new ListNode(4, new ListNode(6)));

        Console.WriteLine("Originals:");
        PrintList(head1);
        PrintList(head2);

        ListNode Result = MergeLL(head1, head2)!;

        Console.WriteLine("Merged:");
        PrintList(Result);
    }
    public static ListNode? MergeLL(ListNode? head1, ListNode? head2)
    {
        ListNode tmp = new ListNode(0);
        ListNode cur = tmp;

        while(head1 != null && head2 != null)
        {
            if(head1.val <= head2.val)
            {
                cur.next = head1;
                head1 = head1.next;
            }
            else
            {
                cur.next = head2;
                head2 = head2.next;
            }
            cur = cur.next;
        }

        if(head1 != null){cur.next = head1;}
        else if(head2 != null){cur.next = head2;}
        return tmp.next;
    }

    private static void PrintList(ListNode? head)
    {
        while (head != null)
        {
            Console.Write(head.val + " ");
            head = head.next;
        }
        Console.WriteLine();
    }
}