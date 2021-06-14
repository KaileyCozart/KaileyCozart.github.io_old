/*** Leet Code 1. ***/
/*** Kailey Cozart Quesada ***/
/*** 6/8/2021 ***/



/** NOTES **/
/* Did the inefficient solution below by myself. 
Did the more efficient solution by reading solution explanation but not reading the code.
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] returnArray = {0, 0};
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    if (i != j) {
                        returnArray[0] = i;
                        returnArray[1] = j;
                    }
                }
            }
        }
        
        return returnArray;
    }
} */



/** PROBLEM DESCRIPTION **/
/* 1. Two Sum
Easy
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */



/** SOLUTION DESCRIPTION **/
/* Approach 2: Two-pass Hash Table (More Efficient Solution Description)
To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.
We reduce the look up time from O(n)O(n) to O(1)O(1) by trading space for speed. A hash table is built exactly for this purpose, it supports fast look up in near constant time. I say "near" because if a collision occurred, a look up could degenerate to O(n)O(n) time. But look up in hash table should be amortized O(1)O(1) time as long as the hash function was chosen carefully.
A simple implementation uses two iterations. In the first iteration, we add each element's value and its index to the table. Then, in the second iteration we check if each element's complement (target - nums[i]target−nums[i]) exists in the table. Beware that the complement must not be nums[i]nums[i] itself!
*/



/** CODE **/
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] returnArray = {0, 0};
        HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            hm.put(nums[i], i);
        }
        for (int j = 0; j < nums.length; j++) {
                if (hm.get(target - nums[j]) != null 
                    && j != hm.get(target - nums[j])) {
                    Integer c = hm.get(target - nums[j]);
                    Integer d = j;
                    returnArray[0] = c;
                    returnArray[1] = d;
                }
        }
        
        return returnArray;
    }
}