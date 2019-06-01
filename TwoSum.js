/**
 * Ka Kei Pun
 * 
 * 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i];
        if (dict[needed] == undefined) {
            dict[nums[i]] = i;
        } else {
            return [dict[needed], i];
        }
    }
};

let testCaseArray = [
    [2, 7, 11, 15],
    [3, 2, 4]
];

let testCaseTarget = [9, 6]

for (let i = 0; i < testCaseArray.length; i++) {
    console.log(twoSum(testCaseArray[i], testCaseTarget[i]));
}