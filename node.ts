export class Node {
    val: number;
    next: Node | null = null;
    prev?: Node | null = null;
    constructor(value: number){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}