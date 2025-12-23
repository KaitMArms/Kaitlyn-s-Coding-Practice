# Remove the N-th node from the end of a linked list in one pass
# Input: LL Head & int n Output: modified head

class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

def RemoveNthNode(head, n):
    tmp = ListNode(0, head)
    cur = tmp
    prev = tmp

    while n > 0 and cur is not None:
        cur = cur.next
        n -= 1
    while cur.next is not None:
        cur = cur.next
        prev = prev.next

    prev.next = prev.next.next
    return tmp.next

def printList(head):
    while head:
        print(head.val, end=" ")
        head = head.next
    print()

def main():
    head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5,ListNode(6))))))
    n = 3

    print("Original:", end=" ")
    printList(head)

    head = RemoveNthNode(head, n)

    print("Reversed:", end=" ")
    printList(head)

if __name__ == "__main__":
    main()