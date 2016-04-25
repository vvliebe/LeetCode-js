/**
 * Created by vvliebe on 16/1/8.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var p = head;
    var res = p;
    var count = 1;
    while (p.next != null) {
        count++;
        if (count > n + 1) {
            res = res.next;
        }
        p = p.next;
    }

    var target = res.next;
    if (count > n) {
        var next = target.next;
        target = null;
        res.next = next;
    } else {
        head = head.next;
    }

    return head;
};