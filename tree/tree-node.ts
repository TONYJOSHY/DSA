export class TreeNode{
    val: number | null = null;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}