import { StackNode } from "./stack-node";

class Stack {
    first: StackNode | null;
    last: StackNode | null;
    size : number;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }   
    
    push(val: number){
        const node = new StackNode(val);
        if(!this.first){
            this.first = node;
        } else {
            this.last!.next = node;
        }
        this.last = node;
        this.size++;
    }

    unshift(val: number){
        const node = new StackNode(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first.next = temp;
            this.first = node;
        }
        this.size++;
    }

    shift(){
        if(!this.first) return false;
        var temp = this.first; 
        if(this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp
    }
}