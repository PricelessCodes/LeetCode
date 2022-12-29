/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    let head = root;
    
    swap(head);
    
    return root;
    
};

var swap = function(node) {
    
    if (node == null) return;
    
    swap(node.left);
    swap(node.right);
    
    const temp = node.left;
    node.left = node.right;
    node.right = temp; 
};