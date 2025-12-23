/* Remove the N-th node from the end of a linked list in one pass
Input: LL Head & int n Output: modified head
 */
#include <iostream>

using namespace std;

struct ListNode{
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* RemoveNthNode(ListNode* head, int n){
    ListNode* tmp = new ListNode(0);
    tmp->next = head;
    ListNode* cur = tmp;
    ListNode* prev = tmp;

    while(n > 0 && cur != nullptr){
        cur = cur->next;
        n--;
    }
    while(cur->next != nullptr){
        cur = cur->next;
        prev = prev->next;
    }

    prev->next = prev->next->next;
    return tmp->next;
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
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);
    head->next->next->next->next->next = new ListNode(6);

    int n = 3;

    cout << "Original: ";
    printList(head);
    
    head = RemoveNthNode(head, n);

    cout << "Reversed: ";
    printList(head);
}