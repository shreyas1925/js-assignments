const conCatWithoutFirstChar = require("./question7")

describe('Tests for question 5',()=>{
    test('test case one',()=>{
        
        expect(conCatWithoutFirstChar(["code","academy"])).toBe("odecademy")
    })

    test('test case two',()=>{
        expect(conCatWithoutFirstChar(["shreyas","shettigar"])).toBe("hreyashettigar")
        
    })

    test('test case three',()=>{
       
        expect(conCatWithoutFirstChar(["mckinsey","company"])).toBe("ckinseyompany")
    })

    test('test case four',()=>{
       
        expect(conCatWithoutFirstChar(["i","academy","hello"])).toBe("cademyello")
    })
}
)