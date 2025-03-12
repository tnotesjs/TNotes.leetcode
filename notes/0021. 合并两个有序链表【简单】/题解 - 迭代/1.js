// 22-08-17
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  let head, cur
  if (list1.val >= list2.val) {
    head = cur = list2
    list2 = list2.next
  } else {
    head = cur = list1
    list1 = list1.next
  }
  while(list1 && list2) {
    if (list1.val >= list2.val) {
      cur.next = list2
      cur = cur.next
      list2 = list2.next
    } else {
      cur.next = list1
      cur = cur.next
      list1 = list1.next
    }
  }
  cur.next = list1 ? list1 : list2
  return head
};

// #region test

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function traverseLinkedList(root) {
  let temp = root;
  while (true) {
      if (temp !== null) {
          console.log(temp.val);
      } else {
          break;
      }
      temp = temp.next;
  }
}

// 示例1
const l1_node1 = new ListNode(1);
const l1_node2 = new ListNode(2);
const l1_node4 = new ListNode(4);
l1_node1.next = l1_node2;
l1_node2.next = l1_node4;

const l2_node1 = new ListNode(1);
const l2_node3 = new ListNode(3);
const l2_node4 = new ListNode(4);
l2_node1.next = l2_node3;
l2_node3.next = l2_node4;


const newList1 = mergeTwoLists(l1_node1, l2_node1);
traverseLinkedList(newList1); // 1 1 2 3 4 4


// 示例2
// const newList2 = mergeTwoLists(new ListNode(null), new ListNode(null));
// traverseLinkedList(newList2); // null null



// 示例3
// const newList3 = mergeTwoLists(new ListNode(null), new ListNode(0));
// traverseLinkedList(newList3); // 0 null

// #endregion test