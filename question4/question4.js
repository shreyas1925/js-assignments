function longestString(stringarr)
{
    let maxi=0
    let result=""

    stringarr.forEach(element => {

        if(element.length > maxi)
        {
            result = element
            
        }
        maxi = element.length
    });

    return result
}

const longestString = (stringarr) =>
{
    let maxi=0
    let result=""

    stringarr.forEach(element => {

        if(element.length > maxi)
        {
            result = element
            
        }
        maxi = element.length
    });

    return result
}

longestString(["we", "love", "code", "academy"])

module.exports = longestString