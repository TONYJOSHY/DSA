import { Node } from './node';

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data){
        const node = new Node(data);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            // why tail.next intead of head.next
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    traverse(){
        var currentNode = this.head;
        while(currentNode){
            console.log(currentNode.val)
            currentNode = currentNode.next
        }
    }

    pop(){
        if(!this.head) return 'Empty list';
        else {
            var pre = this.head;
            if(pre.next){
                pre = pre.next
            } else {
                console.log(pre.val)
            }
        }
    }
}