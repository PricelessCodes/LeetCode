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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    if (root == null) return true;
    
    // if -1 then the tree is not balanced else then balanced and the return value is the
    //max height
    return check(root) != -1 ? true : false;
    
};

var check = function(node) {
    
    if (node == null) return 0;
    
    let left = check(node.left);
    let right = check(node.right);
    
    // if left or right is -1 then one of them was not balanced,
    // if difference between left or right more than 1 then not balanced
    if (left == -1 || right == -1 || Math.abs(left - right) > 1) return -1;
    
    //if balanced then return max height
    return 1 + Math.max(left, right);
};