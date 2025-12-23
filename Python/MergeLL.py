#Merge two sorted linked lists into one sorted list

class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

def MergeLL(head1, head2):
    tmp = ListNode(0)
    cur = tmp

    while head1 is not None and head2 is not None:
        if head1.val <= head2.val:
            cur.next = head1
            head1 = head1.next
        else:
            cur.next = head2
            head2 = head2.next
        cur = cur.next

    if head1 is not None:
        cur.next = head1
    elif head2 is not None:
        return tmp.next 

def printList(head):
    while head:
        print(head.val, end=" ")
        head = head.next
    print()

def main():
    head1 = ListNode(1, ListNode(3, ListNode(5)))
    head2 = ListNode(2, ListNode(4, ListNode(6)))

    print("Originals:", end=" ")
    printList(head1)
    printList(head2)

    Result = MergeLL(head1, head2)

    print("Merged:", end=" ")
    printList(Result)

if __name__ == "__main__":
    main()