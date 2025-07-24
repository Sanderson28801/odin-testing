export function analyzeArr(arr) {
  if (arr.length === 0) {
    return [null, null, null, arr.length];
  } else {
    let sum = arr.reduce((prev, curr) => prev + curr, 0);
    let length = arr.length
    let average = sum / length
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [average, min, max, length]
  }
}
