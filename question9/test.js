const replaceChar = require("./question9")

describe('Tests for question 5',()=>{
    test('test case one',()=>{
        
        expect(replaceChar("codeacademy")).toBe("dpefbdbefnz")
    })

    test('test case two',()=>{
        expect(replaceChar("lazyinterns")).toBe("mb{zjoufsot")
        
    })

    test('test case three',()=>{
       
        expect(replaceChar("APPLE")).toBe("BQQMF")
    })

    test('test case four',()=>{
       
        expect(replaceChar("google")).toBe("hpphmf")
    })
}
)