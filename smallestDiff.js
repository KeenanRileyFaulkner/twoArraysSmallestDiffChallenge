//O(n^2) runtime solution
const badSolution = (arr1, arr2) => {
    let answer = Math.abs(arr1[0] - arr2[0]);
    for(let i = 0; i < arr1.length; ++i) {
        for(let j = 0; j < arr2.length; ++j) {
            if (Math.abs(arr2[j] - arr1[i]) < answer) {
                answer = Math.abs(arr2[j] - arr1[i]);
            }
        }
    }

    return answer;
}

let firstArr = [10,20,14,16,18];
let secondArr = [30,23,54,33,96];

console.time('badSolution');
console.log(badSolution(firstArr, secondArr));
console.timeEnd('badSolution');

//Better solution:
    //Sort both arrays
    //Walk through the arrays and increment only the smaller number
    //If the min difference is smaller than what is currently saved as such, update it

//Sort is O(mlogm + nlogn)
//O(m + n) to walk through the arrays
//-> time complexity is O(mlogm + nlogn)
const betterSolution = (arr1, arr2) => {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let min = Math.abs(arr1[i] - arr2[j]);

    while(i < arr1.length && j < arr2.length) {
        if(Math.abs(arr1[i] - arr2[j]) < min) {
            min = Math.abs(arr1[i] - arr2[j]);
        }

        if(arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return min;
}

console.time('betterSolution');
console.log(betterSolution(firstArr, secondArr));
console.timeEnd('betterSolution');

//notice that betterSolution is on average over ten times faster when each array has an input size of only 5.