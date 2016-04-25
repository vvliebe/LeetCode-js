/**
 * Created by vvliebe on 16/1/9.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);


/**
 * 链表循环交换节点
 * @return {ListNode}
 */
var printListNode = function (listNode) {
    var str = '[';
    while (listNode != null) {
        str += listNode.val + ' ';
        listNode = listNode.next;
    }
    str += ']';

    console.log(str);
};
/**
 * 循环反转链表节点
 */
var reverseKGroup = function (head, k) {
    if (k == 1 || head == null || head.next == null) return head;
    var reverse = function (head, tail) {
        if (head == null || head.next == null) return head;

        var h = head;
        while (h != tail) {
            var next = h.next;
            h.next = tail.next;
            tail.next = h;
            h = next;
        }
        return tail;
    };
    var start = null;
    var end = null;
    var p = head;
    var pre = null;
    var num = 1;
    var res = head;
    while (p != null) {
        var next = p.next;
        if (num % k == 1) {
            start = p;
        }
        if (num % k == 0) {
            end = p;
            var tmp = reverse(start, end);
            printListNode(tmp);
            if (pre != null) {
                pre.next = tmp;
            } else {
                res = tmp;
            }
            pre = start;
            //console.log(pre.val);
        }
        num++;
        p = next;
    }
    return res;
};


printListNode(reverseKGroup(head, 4));













