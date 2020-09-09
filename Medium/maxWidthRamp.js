// 962. Maximum Width Ramp
/*
Given an array A of integers, a ramp is a tuple (i, j) for which i < j and A[i] <= A[j].  The width of such a ramp is j - i.
Find the maximum width of a ramp in A.  If one doesn't exist, return 0.

Example 1:
Input: [6,0,8,2,1,5]
Output: 4
Explanation:
The maximum width ramp is achieved at (i, j) = (1, 5): A[1] = 0 and A[5] = 5.

Example 2:
Input: [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation:
The maximum width ramp is achieved at (i, j) = (2, 9): A[2] = 1 and A[9] = 1.

Note:
2 <= A.length <= 50000
0 <= A[i] <= 50000
*/
var maxWidthRamp = function (A) {
  // Can't use sort method as we are dealing with index as well
  let sortedIndex = A.map((el, index) => [el, index]).sort((a, b) =>
    sortTwoEl(a, b)
  );
  let res = 0;
  let m = A.length;

  sortedIndex.forEach((el) => {
    res = Math.max(res, el[1] - m);
    m = Math.min(el[1], m);
  });

  return res;
};

var sortTwoEl = (a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
};
