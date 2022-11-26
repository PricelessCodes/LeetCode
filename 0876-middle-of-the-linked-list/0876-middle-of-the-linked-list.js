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
var middleNode = function(head) {
    
    if (!head) return head;

let curr = head;
let count = 0;

while (curr) {
    curr = curr.next;
    count++;
}

if (count % 2 == 0) parseInt(count = count / 2) + 1;
else count = parseInt(count / 2);

curr = head;

while (count) {
    curr = curr.next;
    count--;
}

return curr;
    
};