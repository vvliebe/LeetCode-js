/**
 * Created by vvliebe on 4/6/16.
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    var dir_map = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    var dir = 0;
    var res = [];
    var x = 0, y = 0;
    for (var i = 1; i <= n * n; i++) {
        if (!res[x]) res[x] = [];
        res[x][y] = i;
        var tx = x + dir_map[dir][0];
        var ty = y + dir_map[dir][1];
        // 越界
        if (tx < 0 || ty < 0 || tx == n || ty == n || (res[tx] && res[tx][ty])) {
            dir = (dir + 1) % 4;
            x += dir_map[dir][0];
            y += dir_map[dir][1];
        } else {
            x = tx;
            y = ty;
        }
    }
    return res;
};

console.log(generateMatrix(4));