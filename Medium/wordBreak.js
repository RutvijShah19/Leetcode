// 139. Word Break
/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

var wordBreak = (s, wordDict) => {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for(let i = 1; i <= s.length; i++) {
    for(let j = 0; j < i; j++) {
      const word = s.slice(j, i);

      if(dp[j] === true && wordDict.includes(word)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// OR

var wordBreak = (s, wordDict) => {
  let start = [0];
  dfs(s, wordDict, 0, start);

  return start.includes(s.length);
}

var dfs = (s, wordDict, startId, start) => {
  if(!s) return;

  for(const word of wordDict) {
    if(s.indexOf(word) === 0 && !start.includes(startId + word.length)) {
      start.push(startId + word.length);
      dfs(s.slice(word.length), wordDict, startId + word.length, start);
    }
  }
}
