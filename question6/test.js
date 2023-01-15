const endsWithScript = require("./endsWithScript")

describe('Tests for question 5',()=>{
    test('test case one',()=>{
        
        expect(endsWithScript("javaS")).toBeFalsy()
    })

    test('test case two',()=>{
        expect(endsWithScript("script")).toBeFalsy()
        
    })

    test('test case three',()=>{
       
        expect(endsWithScript("ECMAScript")).toBeTruthy()
    })

    test('test case four',()=>{
       
        expect(endsWithScript("JavaScript")).toBeTruthy()
    })
}
)
