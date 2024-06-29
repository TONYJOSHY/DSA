import { Node } from './node.ts';

class DoubleLinkedList{

    head: Node | null = null;
    tail: Node | null = null;
    length: number = 0
    
    constructor(){}

    push(data: number){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
        } else {
            this.tail!.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.length++;
        return this;
    }

}