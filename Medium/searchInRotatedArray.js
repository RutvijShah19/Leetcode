// 33. Search in Rotated Sorted Array
/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    // When dividing the rotated array into two halves, one must be sorted
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) right = mid - 1; // target is in the left
      else left = mid + 1; // target is in the right
    } else {
      if (nums[mid] <= target && target <= nums[right]) left = mid + 1; // target is in the right
      else right = mid - 1; // target is in the left
    }
  }

  return -1;
};
