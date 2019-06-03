/**
 * 
 * Ka Kei Pun
 * 
 * 2. Add Two Numbers
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Runtime: 112 ms, faster than 92.58% of JavaScript online submissions for Add Two Numbers.
 * 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let commonPackage = require('./Common.js');

var addTwoNumbers = function(l1, l2) {
    let resultString1 = toString(l1), resultString2 = toString(l2);
    let length = resultString1.length > resultString2.length ? resultString1.length : resultString2.length;
    let number1 = getNumber(resultString1, 0);
    let number2 = getNumber(resultString2, 0);
    let firstNumber = add(number1, number2, false);
    let root = new ListNode(firstNumber.result);
    let currentNode = root;
    let carry = firstNumber.carry;
    for(let i = 1; i < length; i++) {
        let localNumber1 = getNumber(resultString1, i);
        let localNumber2 = getNumber(resultString2, i);
        let localResult = add(localNumber1, localNumber2, carry);
        currentNode.next = new ListNode(localResult.result);
        carry = localResult.carry;
        currentNode = currentNode.next;
    }
    currentNode.next = carry ? new ListNode(1) : null;
    return root;
};

function add(n1, n2, carry) {
    let addup = carry ? n1 + n2 + 1 : n1 + n2;
    return {result: addup % 10, carry: addup >= 10};
}

function getNumber(input, i) {
    return input.length - i - 1 >= 0 ? parseInt(input.charAt(input.length - i - 1)) : 0;
}

function toString(root) {
    let result = '';
    while (root != null) {
        result = root.val + result;
        root = root.next;
    }
    return result;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function printNode(root) {
    let result = ''
    while (root != null) {
        result += root.val;
        root = root.next;
    }
    console.log('Print Node: ' + result);
}

let testList1 = [
    [4, 1 ,2],
    [2, 4, 3],
    [1, 0, 0, 1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [5]
];

let testList2 = [
    [3, 0, 7],
    [5, 6, 4],
    [1],
    [5,6,4],
    [5]

];

let expected = [917, 807, 1002];

for (let i = 0; i < testList1.length; i++) {
    let listNode1 = commonPackage.createNode(testList1[i]);
    let listNode2 = commonPackage.createNode(testList2[i]);
    let result = addTwoNumbers(listNode1, listNode2);
    printNode(result);
}