function replaceChar(string)
{
    let result = "" , ans = ""
    let value

    for(let i=0;i<string.length;i++)
    {
        value = string.charAt(i).charCodeAt()
        value = value + 1
        ans = String.fromCharCode(value)
        result+=ans
    }

    return result
}

replaceChar("codeacademy")

module.exports = replaceChar