function largestEven(nums)
{
    let maxi = -1

    nums.forEach((ele,index)=>{

        if(ele%2==0)
        {
            maxi = Math.max(maxi,ele)
        }
    })

    return maxi
}

const largesteven = (nums) => {

    let maxi = -1

    nums.forEach((ele,index)=>{

        if(ele%2==0)
        {
            maxi = Math.max(maxi,ele)
        }
    })

    return maxi
}

let numbers = []

let size = prompt("Enter the size of array")

for(let i=0;i<size;i++)
{
    numbers[i] = prompt("Enter array elements one by one")
}

console.log(largestEven(numbers))
console.log(largesteven(numbers))