import DoublyLinkedList from "../DoublyLinkedList/DoublyLinkedList";
import Node from "../Node/Node";


/**
 * HashMap Data Structure that handles collisions through the separate chaining method.
 */
class HashMap {
    hashmap: any[]

    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null)
            .map(() => new DoublyLinkedList());
    }

    /**
     * Creates a hash code to index the data in the HashMap
     * @param key any
     * @returns number | hashCode | Always lower than the length of the hashmap.
     */
    hash(key: any) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length;
    }

    /**
     * Assigns a new key-value pair to the HashMap
     * @param key any
     * @param value any
     * @returns 
     */
    assign(key: any, value: any) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        console.log(`Storing ${value} at index ${arrayIndex}`);

        if (linkedList.head === null) {
            linkedList.addToHead({ key, value });
            return;
        }

        let current = linkedList.head;

        while (current) {
            if (current.data.key === key) {
                current.data = { key, value };
            }
            if (!current.next) {
                current.next = new Node({ key, value });
                break;
            }
        current = current.next;
        }
    }

    /**
     * Retrives value from Hash Map based on key.
     * @param key any
     * @returns any | Data Value
     */
    retrieve(key: any) {
        const arrayIndex = this.hash(key);
        let current = this.hashmap[arrayIndex].head;

        while (current) {
            if (current.data.key === key) {
                console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
                return current.data.value;
            }
            current = current.next;
        }

        return null;
    }
}

export default HashMap;
