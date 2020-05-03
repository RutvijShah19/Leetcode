// 1221. Split a String in Balanced Strings
/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.
Given a balanced string s split it in the maximum amount of balanced strings.
Return the maximum amount of splitted balanced strings.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Example 4:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
*/
// Time Complexity: O(n)
// Space Complexity: O(1)
var balancedStringSplit = function(s) {
    let res = 0;
    let count = 0;

    for(const c of s) {
        if(c === 'L') {
            count++;
        } else if(c === 'R') {
            count--;
        }

        if(count === 0) {
            res++;
        }
    }

    return res;
};
