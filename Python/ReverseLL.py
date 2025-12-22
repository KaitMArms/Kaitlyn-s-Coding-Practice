class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

def reverseList(head):
    prev = None
    cur = head

    while cur:
        next_node = cur.next
        cur.next = prev
        prev = cur
        cur = next_node
    return prev

def printList(head):
    while head:
        print(head.val, end=" ")
        head = head.next
    print()

def main():
    head = ListNode(1, ListNode(2, ListNode(3)))

    print("Original:", end=" ")
    printList(head)

    head = reverseList(head)

    print("Reversed:", end=" ")
    printList(head)

if __name__ == "__main__":
    main()