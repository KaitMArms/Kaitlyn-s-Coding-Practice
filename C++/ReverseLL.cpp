// Reverses a singly linked list
#include <iostream>

using namespace std;

struct ListNode{
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* ReverseLL(ListNode* head){
    ListNode* prev = nullptr;
    ListNode* cur = head;

    while(cur != nullptr){
        ListNode* next = cur->next;
        cur->next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

void printList(ListNode* head){
    while(head){
        cout << head->val << " ";
        head = head->next;
    }
    cout << endl;
}

int main(){
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);

    cout << "Original: ";
    printList(head);
    
    head = ReverseLL(head);

    cout << "Reversed: ";
    printList(head);
}