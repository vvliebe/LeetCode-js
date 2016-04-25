/**
 * Created by vvliebe on 16/1/9.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 链表交换节点
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if(head == null || head.next == null) return head;
    var curNode = head;
    var preNode = null;
    var preNode2 = null;
    var res = null;
    var count = 0;

    while (curNode != null) {
        count++;
        if (count % 2 == 0) {
            var nextNode = curNode.next;
            curNode.next = preNode;
            preNode.next = nextNode;

            if(res == null) {
                res = curNode;
            }

            if(preNode2 != null) {
                preNode2.next = curNode;
            }

            curNode = preNode;
            preNode2 = curNode;
        }

        preNode = curNode;
        curNode = curNode.next;
    }

    return res;
};