// task-4
const num = [19, 6, 8, 4, 2, 5, 7, 1];
let min = num[0];
let max = num[0];
let average = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] < min) {
    min = num[i];
  } 
  if (num[i] > max) {
    max = num[i];
  }
}
average=(min+max)/2
console.log(average)


