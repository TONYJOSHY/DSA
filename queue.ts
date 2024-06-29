import { StackNode } from "./stack-node";

class Queue{

    first: StackNode | null;
    last: StackNode | null;
    size : number;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enQueue(val: number){
        var node = new StackNode(val);
        if(!this.first){
            this.first = node;
        } else {
            this.last!.next = node;
        }
        this.last = node;
        this.size++;
    }

    deQueue(){
        var temp = this.first;
        if(!this.first) return false;
        if(this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp
    }

}