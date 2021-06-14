/*** Leet Code 3. ***/
/*** Kailey Cozart Quesada ***/
/*** 6/10/2021 ***/



/** NOTES **/
/* Did it myself. Read the solution description for help, but this one took a very long time and still isn't too efficient. */



/** PROBLEM DESCRIPTION **/
/* 3. Longest Substring Without Repeating Characters
Medium
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.



/** SOLUTION DESCRIPTION **/
/* Approach 1: Brute Force
Intuition
Check all the substring one by one to see if it has no duplicate character.

Algorithm
Suppose we have a function boolean allUnique(String substring) which will return true if the characters in the substring are all unique, otherwise false. We can iterate through all the possible substrings of the given string s and call the function allUnique. If it turns out to be true, then we update our answer of the maximum length of substring without duplicate characters.
Now let's fill the missing parts:
To enumerate all substrings of a given string, we enumerate the start and end indices of them. Suppose the start and end indices are ii and jj, respectively. Then we have 0 \leq i \lt j \leq n0≤i<j≤n (here end index jj is exclusive by convention). Thus, using two nested loops with ii from 0 to n - 1n−1 and jj from i+1i+1 to nn, we can enumerate all the substrings of s.
To check if one string has duplicate characters, we can use a set. We iterate through all the characters in the string and put them into the set one by one. Before putting one character, we check if the set already contains it. If so, we return false. After the loop, we return true.

Approach 2: Sliding Window
Algorithm
The naive approach is very straightforward. But it is too slow. So how can we optimize it?
...
By using HashSet as a sliding window, checking if a character in the current can be done in O(1)O(1).
A sliding window is an abstract concept commonly used in array/string problems. A window is a range of elements in the array/string which usually defined by the start and end indices, i.e. [i, j)[i,j) (left-closed, right-open). A sliding window is a window "slides" its two boundaries to the certain direction. For example, if we slide [i, j)[i,j) to the right by 11 element, then it becomes [i+1, j+1)[i+1,j+1) (left-closed, right-open).
Back to our problem. We use HashSet to store the characters in current window [i, j)[i,j) (j = ij=i initially). Then we slide the index jj to the right. If it is not in the HashSet, we slide jj further. Doing so until s[j] is already in the HashSet. At this point, we found the maximum size of substrings without duplicate characters start with index ii. If we do this for all ii, we get our answer.

Approach 3: Sliding Window Optimized
The above solution requires at most 2n steps. In fact, it could be optimized to require only n steps. Instead of using a set to tell if a character exists or not, we could define a mapping of the characters to its index. Then we can skip the characters immediately when we found a repeated character.
...
Java (Using HashMap)
Here is a visualization of the above code.
Java (Assuming ASCII 128)
The previous implements all have no assumption on the charset of the string s.
If we know that the charset is rather small, we can replace the Map with an integer array as direct access table.
Commonly used tables are:
int[26] for Letters 'a' - 'z' or 'A' - 'Z'
int[128] for ASCII
int[256] for Extended ASCII



/** CODE **/
// Test Cases: "aab" "dvdf" "bpfbhmipx" " " "abba"
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 0) {
            return 0;
        }
        int tmpCtr = 0;
        int finalCtr = 0;
        int frontPtr = 0;
        int backPtr = 1;
        HashMap<String,Integer> hm = new HashMap<>();
        hm.put(s.substring(frontPtr,frontPtr+1), frontPtr);
        
        while (backPtr < s.length()) {
            Integer putResult = hm.put(s.substring(backPtr,backPtr+1), backPtr);
            if (putResult != null) { // Element in Map Already
                if (frontPtr < putResult + 1) {
                    frontPtr = putResult + 1;
                }
                backPtr++;
            } else { // New Element Added
                backPtr++;
            }
            tmpCtr = backPtr - frontPtr;
            if (tmpCtr > finalCtr) {
                finalCtr = tmpCtr;
            }
            System.out.println(s.substring(frontPtr,backPtr));
        }
        
        if (finalCtr == 0) {
            return 1;
        }
        return finalCtr;
    }
}