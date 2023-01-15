const largestEven = require("./largestEven")

describe('Tests for question 1',()=>{
    test('finding largest even number',()=>{
        let arr = [1,3,5,7]
        let res = largestEven(arr)
        expect(res).toBe(-1)
    })

    test('finding largest even number',()=>{
        let arr = [1,8,2,7]
        let res = largestEven(arr)
        expect(res).toBe(8)
    })

    test('finding largest even number',()=>{
        let arr = [9,0,7,0]
        let res = largestEven(arr)
        expect(res).toBe(-1)
    })

    test('finding largest even number',()=>{
        let arr = [1,0,0,0]
        let res = largestEven(arr)
        expect(res).toBe(0)
    })
}        
)

