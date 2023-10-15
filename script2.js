// task-2
const arr = [2, 6, 8, 4, 2, 5, 2, 1, 87, 91, 2, 3, 5, 6, 2, 2, 2, 2, 2];
const target = 2;
counter = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    counter++;
  }
}
console.log(counter);
