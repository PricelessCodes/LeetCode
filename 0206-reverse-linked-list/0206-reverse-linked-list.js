/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if (!head) return null;
    
    let nextNode = head.next;
    head.next = null;

    while (nextNode){
        let temp = nextNode.next;
        nextNode.next = head;
        head = nextNode;
        nextNode = temp;
    }

    return head;
};