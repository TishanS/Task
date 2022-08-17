let arr = [12, 3, 1, 2, -6, 5, -8, 6];
let = res = [];
let sortArr = arr.sort(function (a, b) { return a - b });
let targetSum = 0;

function triplet(sortArr, targetSum) {
    for (let i = 0; i < sortArr.length - 2; i++) {
        sum = targetSum - parseInt(sortArr[i]);
        start = i + 1;
        end = sortArr.length - 1;

        while (start < end) {
            let pairTotal = sortArr[start] + sortArr[end];
            if (sum === pairTotal) {
                res.push([sortArr[i], sortArr[start], sortArr[end]]);
                start++;
                end--;
            }
            else if (sum > pairTotal) {
                start++;
            }
            else {
                end--;
            }
        }

    }
    return res;
}

const num = triplet(sortArr, targetSum);
console.log(num)