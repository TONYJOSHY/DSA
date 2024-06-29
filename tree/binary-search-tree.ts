import { TreeNode } from './tree-node'

class BinarySearchTree {
    root: TreeNode | null;
    constructor(){
        this.root = null;
    }

    // 10, 5, 13, 2, 7, 9, 15
    insert(val: number){
        var newNode = new TreeNode(val)
        if(!this.root){
            this.root = newNode; // 10
            return this;
        } 
        var current: TreeNode = this.root;
        while(true){                
            // insert in the left side // 5
            if(val < current.val!){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                } 
                current = current.left;
            } else if(val > current.val!) {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right
            } else {
                return this;
            }
        }
    }

    find(val: number){
        if(!this.root) return false;
        var current: TreeNode = this.root;
        var fount = false;
        while(current && !fount){
            if(val === current.val) {
                fount = true;
                return current;
            } else if(val < current.val!){
                current = current.left!;
            } else if(val > current.val!){
                current = current.right!;
            }
        }
        return false;
    }
}