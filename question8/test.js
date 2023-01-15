const numberOfVowels = require("./numberOfVowels")

describe('Tests for question 5',()=>{
    test('test case one',()=>{
        
        expect(numberOfVowels("codeacademy")).toBe(5)
    })

    test('test case two',()=>{
        expect(numberOfVowels("shreyas")).toBe(2)
        
    })

    test('test case three',()=>{
       
        expect(numberOfVowels("appleeown")).toBe(4)
    })

    test('test case four',()=>{
       
        expect(numberOfVowels("okgooglee")).toBe(5)
    })
}
)
