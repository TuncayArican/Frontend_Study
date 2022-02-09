//   Create a function to partition an array from left to right.
// Examples
// movingPartition([-1, -1, -1, -1])
// ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]
// movingPartition([1, 2, 3, 4, 5])
// ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]
// movingPartition([]) ➞ []
// Notes
// With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
// An empty array should return an empty array: []



function movingPartition(list1){
let list2=[]
let list3=[]
for (let i = 1; i < list1.length; i++) {
    list2.push(list1.slice(0,i));
    list2.push(list1.slice(i,));
    list3[i-1]=list2
    list2=[]
}
return list3;
}
console.log(movingPartition([1, 2, 3, 4, 5]));
