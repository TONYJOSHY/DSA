import { Node } from './node.ts';

class SingleLinkedList{

    head: Node | null = null;
    tail: Node | null = null;
    length: number = 0
    
    constructor(){}

    push(data: number){
        const node = new Node(data);
        if(this.length === 0){
            this.head = node;
        } else {
            // why tail.next intead of head.next
            this.tail!.next = node;
        }
        this.tail = node;
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

    pop(data: number){
        if(!this.head) return 'Empty list';
        else {
            var pre = this.head;
            if(pre.val === data){
                const newNode = new Node(data)
                this.tail!.next = newNode;
                this.tail = newNode;
            }
        }
        return this;
    }
}

var sll = new SingleLinkedList()
sll.push(2)
sll.push(3)
