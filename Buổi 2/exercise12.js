const nums1 = [2, 3, 4, 5]
const nums2 = [1, 2, 3, 4, 5, 6]

const nums = [...nums1, ...nums2].sort();
function medianNumber() {
    let num;
    if (nums.length%2 == 1) {
        num = nums[(nums.length-1)/2]
    } else {
        num = ((nums[nums.length/2-1] + nums[nums.length/2])/2)
    }
    return num;
}
console.log(medianNumber())