function numberOfVowels(string)
{
    string = string.toLowerCase()
    let vowelcount = 0

    for(let i = 0 ;i <string.length;i++)
    {
        if(string.charAt(i)=='a' || string.charAt(i)=='e'|| string.charAt(i)=='i' || string.charAt(i)=='o' || string.charAt(i)=='u' || string.charAt(i)=='a' )
        {
            vowelcount++
        }
    }

    return vowelcount
}

const numberOfVowels = (string) =>
{
    string = string.toLowerCase()
    let vowelcount = 0

    for(let i = 0 ;i <string.length;i++)
    {
        if(string.charAt(i)=='a' || string.charAt(i)=='e'|| string.charAt(i)=='i' || string.charAt(i)=='o' || string.charAt(i)=='u' || string.charAt(i)=='a' )
        {
            vowelcount++
        }
    }

    return vowelcount
}

numberOfVowels("codeacademy")

module.exports = numberOfVowels
