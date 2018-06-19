function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var sum = new ListNode(0)
  var result = sum
  var extra = 0;
  while (l1 && l2) {
    result.next = new ListNode(0)
    result = result.next
    var val = l1.val + l2.val + extra
    if (val >= 10) {
      result.val = val - 10
      extra = 1
    } else {
      result.val = val
      extra = 0
    }
    l1 = l1.next
    l2 = l2.next
  }
  while (l1) {
    result.next = new ListNode(0)
    result = result.next
    var val = l1.val + extra
    if (val >= 10) {
      result.val = val - 10
      extra = 1
    } else {
      result.val = val
      extra = 0
    }
    l1 = l1.next
  }
  while (l2) {
    result.next = new ListNode(0)
    result = result.next
    var val = l2.val + extra
    if (val >= 10) {
      result.val = val - 10
      extra = 1
    } else {
      result.val = val
      extra = 0
    }
    l2 = l2.next
  }
  if (extra) {
    result.next = new ListNode(1)
  }
  return sum.next
};

var l1 = new ListNode(1)
l1.next = new ListNode(8)

var l2 = new ListNode(9)
l2.next = new ListNode(2)

var res = addTwoNumbers(l1, l2)

while (res) {
  console.log('res.val => ', res.val)
  res = res.next
}