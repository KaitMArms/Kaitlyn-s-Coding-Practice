// Reverses a singly linked list
using System;

class ReverseLLProblem 
{
    public static void Run()
    {
        ListNode head = new ListNode(1, new ListNode(2, new ListNode(3)));

        Console.WriteLine("Original:");
        PrintList(head);

        head = ReverseLL(head)!;

        Console.WriteLine("Reversed:");
        PrintList(head);
    }

    public static ListNode? ReverseLL(ListNode? head)
    {
        ListNode? prev = null;
        ListNode? cur = head;

        while (cur != null)
        {
            ListNode? next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;
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