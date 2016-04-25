/**
 * Created by vvliebe on 16/1/9.
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 合并k个链表
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) return [];
    var mergeTwoLists = function (l1, l2) {
        if (l1 === null) return l2;
        if (l2 === null) return l1;
        var p1 = l1;
        var p2 = l2;
        var tmp = new ListNode(0);
        var res = tmp;

        while (true) {
            if (p1 === null) {
                tmp.next = p2;

                break;
            }
            if (p2 === null) {
                tmp.next = p1;

                break;
            }
            if (p1.val < p2.val) {
                tmp.next = p1;
                p1 = p1.next;
            } else {
                tmp.next = p2;
                p2 = p2.next;
            }

            tmp = tmp.next;

        }

        return res.next;
    };

    return lists.reduce(function (list1, list2) {
        return mergeTwoLists(list1, list2);
    });
};