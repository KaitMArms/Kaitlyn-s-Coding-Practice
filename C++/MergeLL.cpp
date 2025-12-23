// Merge two sorted linked lists into one sorted list
#include <iostream>

using namespace std;

struct ListNode{
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* MergeLL(ListNode* head1, ListNode* head2){
    ListNode* tmp = new ListNode(0);
    ListNode*cur = tmp;

    while(head1 != nullptr && head2 != nullptr){
        if(head1->val <= head2->val){
            cur->next = head1;
            head1 = head1->next;
        }
        else{
            cur->next = head2;
            head2 = head2->next;
        }
        cur = cur->next;
    }

    if(head1 != nullptr){cur->next = head1;}
    else if(head2 != nullptr){cur->next = head2;}
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
    ListNode* head1 = new ListNode(1);
    head1->next = new ListNode(3);
    head1->next->next = new ListNode(5);
    ListNode* head2 = new ListNode(2);
    head2->next = new ListNode(4);
    head2->next->next = new ListNode(6);

    cout << "Original: ";
    printList(head1);
    printList(head2);
    
    ListNode* Result = MergeLL(head1, head2);

    cout << "Reversed: ";
    printList(Result);
}