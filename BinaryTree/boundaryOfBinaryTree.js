// 545. Boundary of Binary Tree
/*
Given a binary tree, return the values of its boundary in anti-clockwise direction starting from root. Boundary includes left boundary,
leaves, and right boundary in order without duplicate nodes.  (The values of the nodes may still be duplicates.)
Left boundary is defined as the path from root to the left-most node. Right boundary is defined as the path from root to the right-most node.
If the root doesn't have left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not applies to any subtrees.
The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if exists. If not, travel to the right subtree. Repeat until you reach a leaf node.
The right-most node is also defined by the same way with left and right exchanged.

Example 1
Input:
  1
   \
    2
   / \
  3   4

Ouput:
[1, 3, 4, 2]

Explanation:
The root doesn't have left subtree, so the root itself is left boundary.
The leaves are node 3 and 4.
The right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.
So order them in anti-clockwise without duplicates and we have [1,3,4,2].

Example 2
Input:
    ____1_____
   /          \
  2            3
 / \          /
4   5        6
   / \      / \
  7   8    9  10

Ouput:
[1,2,4,7,8,9,10,6,3]

Explanation:
The left boundary are node 1,2,4. (4 is the left-most node according to definition)
The leaves are node 4,7,8,9,10.
The right boundary are node 1,3,6,10. (10 is the right-most node).
So order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].
*/

var boundaryOfBinaryTree = function (root) {
  if (!root || root === null) return [];
  if (!root.left && !root.right) return [root.val];

  let resLeft = [],
    resRight = [],
    res = [];

  // Traversing Left binary tree, eliminate root and leaf nodes
  boundaryLeft = (root) => {
    if (!root) return;

    if (root.left) {
      resLeft.push(root.val);
      boundaryLeft(root.left);
    } else if (root.right) {
      resLeft.push(root.val);
      boundaryLeft(root.right);
    }
  };

  leaf = (root) => {
    if (!root) return;

    leaf(root.left);

    if (!root.left && !root.right) {
      res.push(root.val);
    }

    leaf(root.right);
  };

  boundaryRight = (root) => {
    if (!root) return;

    if (root.right) {
      boundaryRight(root.right);
      resRight.push(root.val);
    } else if (root.left) {
      boundaryRight(root.left);
      resRight.push(root.val);
    }
  };

  boundaryLeft(root.left);
  leaf(root.left);
  leaf(root.right);
  boundaryRight(root.right);

  return [root.val, ...resLeft, ...res, ...resRight];
};
