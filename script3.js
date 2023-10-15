task-3
const arr = [5, 6, 8, 4, 3, 5, 7, 9, 46, 37, 31, 31, 31, 99];
let max = arr[0];
let maxindex;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
    maxindex = i;
  }
}
const arr1 = arr.slice(1, maxindex);
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
  
}
console.log(sum);