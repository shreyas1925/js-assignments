const isLeapYear = require("./question5")

describe('Tests for question 5',()=>{
    test('test case one',()=>{
        
        expect(isLeapYear(1997)).toBeFalsy()
    })

    test('test case two',()=>{
        expect(isLeapYear(2000)).toBeTruthy()
        
    })

    test('test case three',()=>{
       
        expect(isLeapYear(1998)).toBeFalsy()
    })

    test('test case four',()=>{
       
        expect(isLeapYear(1996)).toBeTruthy()
    })
}
)