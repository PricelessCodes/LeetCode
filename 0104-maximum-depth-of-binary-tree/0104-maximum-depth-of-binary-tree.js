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
 * @return {number}
 */
var maxDepth = function(root) {
    
    return depth(root);
    
};

var depth  = function(node) {
    
    if (node == null) return 0;
    
    let left = depth(node.left);
    let right = depth(node.right);
    
    //return max height
    return 1 + Math.max(left, right);
};