/*You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/

public class AddTwoNumbersProblem
{
    public static void Run()
    {
        // l1 = [2,4,3]
        ListNode l1 = new ListNode(2,
                        new ListNode(4,
                            new ListNode(3)));

        // l2 = [5,6,4]
        ListNode l2 = new ListNode(5,
                        new ListNode(6,
                            new ListNode(4)));

        ListNode? result = AddTwoNumbers(l1, l2);

        // Print result
        while (result != null)
        {
            Console.Write(result.val);
            if (result.next != null) Console.Write(" -> ");
            result = result.next;
        }
        Console.WriteLine();
    }

    public static ListNode? AddTwoNumbers(ListNode? l1, ListNode? l2)
    {
        ListNode? res = new();
        ListNode? current = res;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0)
        {
            int l1Val = (l1 != null) ? l1.val : 0;
            int l2Val = (l2 != null) ? l2.val : 0;

            int sum = l1Val + l2Val + carry;
            carry = sum / 10;

            current.next = new ListNode(sum % 10);
            current = current.next;

            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }

        return res.next;
    }
}

// Shared type
public class ListNode
{
    public int val;
    public ListNode? next;

    public ListNode(int val = 0, ListNode? next = null)
    {
        this.val = val;
        this.next = next;
    }
}