function ListNode(val) {
    this.val = val;
    this.next = null;
}

module.exports = {
    createNode: function(numberArray) {
        let root = new ListNode(numberArray[0]);
        let currentNode = root;
        for (let i = 1; i < numberArray.length; i++) {
            currentNode.next = new ListNode(numberArray[i]);
            currentNode = currentNode.next
        }
        return root;
    }
}