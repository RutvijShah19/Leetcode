// 205. Isomorphic Strings
/*
Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Note:
You may assume both s and t have the same length.
*/
var isIsomorphic = function(s, t) {
    let hashMap = {};
    let len = s.length;
    let i = 0;

    while(i < len) {
        if(hashMap[s[i]]) {
            if(hashMap[s[i]] !== t[i]) {
                return false;
            }
        }

        hashMap[s[i]] = t[i];
        i++;
    }

    return true;
};
