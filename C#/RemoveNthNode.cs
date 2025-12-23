/* Remove the N-th node from the end of a linked list in one pass
Input: LL Head & int n Output: modified head
 */
using System;

class RemoveNthNodeProblem
{
    public static void Run()
    {
        ListNode head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

        Console.WriteLine("Original:");
        PrintList(head);
        int n = 3;

        head = RemoveNthNode(head, n)!;

        Console.WriteLine("Reversed:");
        PrintList(head);
    }

    public static ListNode? RemoveNthNode(ListNode? head, int n)
    {
        ListNode tmp = new ListNode(0, head);
        ListNode? cur = tmp;
        ListNode? prev = tmp;

        while(n > 0 && cur != null)
        {
            cur = cur.next;
            n--;
        }
        while(cur?.next != null)
        {
            cur = cur.next;
            prev = prev!.next;
        }

        prev!.next = prev.next!.next;
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
