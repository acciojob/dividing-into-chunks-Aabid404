const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	function divide(arr, n) {
  const result = [];
  let current = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (currentSum + val <= n) {
      current.push(val);
      currentSum += val;
    } else {
      if (current.length > 0) {
        result.push(current);
      }
      current = [val];
      currentSum = val;
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
}

};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
