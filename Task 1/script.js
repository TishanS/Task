let a = [1, 3, 6, 4, 1, 2];
let res;

function solution(arr) {
    for (let i = 1; 1 < 100; i++) {
        if (!arr.includes(i)) {
            res = i;
            break;
        }
    }
    return res;
}

const num = solution(a);
console.log("Smallest positive integer: "+num);