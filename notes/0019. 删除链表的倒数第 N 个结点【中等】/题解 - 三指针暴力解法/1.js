var removeNthFromEnd = function(head, n) {
  let root = cur1 = cur2 = new ListNode(-1, head);
  // cur1 指针，负责探路，获取链表的总长度
  let length = 0; // 当前链表的总长度
  while (cur1.next) {
    cur1 = cur1.next;
    length ++;
  }
  // cur2 指针，负责删除指定节点
  let start = length - n; // 从哪个节点开始截
  while (start--) {
    cur2 = cur2.next
  }
  cur2.next = cur2.next.next; // 删除第 start 个节点
  return root.next; // 返回表头
};