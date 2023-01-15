const checkDigits = require("./evenDigits")

describe('Tests for question 2',()=>{
    test('checking every digit in number are same',()=>{
        
        expect(checkDigits(22)).toBeTruthy()
    })

    test('checking every digit in number are same',()=>{
        
        expect(checkDigits(23)).toBeFalsy()
    })

    test('checking every digit in number are same',()=>{
       
        expect(checkDigits(4444)).toBeTruthy()
    })

    test('checking every digit in number are same',()=>{
       
        expect(checkDigits(775)).toBeFalsy()
    })
}
)
