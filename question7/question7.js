function conCatWithoutFirstChar(stringarr)
{
    let result = "" , ans = ""

    stringarr.forEach((element)=>{

         ans +=  result.concat(element.slice(1))

    })

    return ans
}

const conCatWithoutFirstChar = (stringarr) =>
{
    let result = "" 

    stringarr.forEach((element)=>{

         result += element.slice(1)

    })

    return ans
}

conCatWithoutFirstChar(["code","academy"])

module.exports = conCatWithoutFirstChar