export class StackNode{
    val: number | null = null;
    next: StackNode | null;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}