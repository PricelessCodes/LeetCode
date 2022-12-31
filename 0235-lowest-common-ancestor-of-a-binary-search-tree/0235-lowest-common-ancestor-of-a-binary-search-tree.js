/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    //binary search (log n)
    while(root != null) {
        // if val bigger than both p and q then both of them r at left side of the tree
        if (root.val > p.val && root.val > q.val) root = root.left;
        //else if val smaller than both p and q then both of them r at right side of the tree
        else if (root.val < p.val && root.val < q.val) root = root.right;
        // else p and q r not in the same side then the node i am currently at is
        // the lowest common ancestor 
        else return root;
    }    
};
