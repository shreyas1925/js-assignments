const letterCases = require("./question3")

describe('Tests for question 3',()=>{
    test('test case one',()=>{
        
        expect(letterCases("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP")
    })

    test('test case two',()=>{
        
        expect(letterCases("hELlo sHReYAs")).toBe("HelLO ShrEyaS")
    })

    test('test case three',()=>{
       
        expect(letterCases("hIi")).toBe("HiI")
    })

    test('test case four',()=>{
       
        expect(letterCases("LaYManN")).toBe("lAymANn")
    })
}
)