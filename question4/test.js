const longestString = require("./longestString")

describe('Tests for question 4',()=>{
    test('test case one',()=>{
        
        expect(longestString(["we", "love", "code", "academy"])).toBe("academy")
    })

    test('test case two',()=>{
        expect(longestString(["","",""])).toBe("")
        
    })

    test('test case three',()=>{
       
        expect(longestString(["hello","mckinsey"])).toBe("mckinsey")
    })

    test('test case four',()=>{
       
        expect(longestString(["", "i", "Am", "shreyas"])).toBe("shreyas")
    })
}
)
