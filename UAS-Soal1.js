class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}

function inorderTravelsal(root){
const result = [];

function traverse(node){
    if (node){
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
     }
    }
    traverse(root);
    return result;
}
// membangun binary tree:
//      1
//        \
//          2
//         /
//       3

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.info(inorderTravelsal(root)); // output: [1,3,2]