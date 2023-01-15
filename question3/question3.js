function letterCases(sentence)
{
    let string = ""

    for(let i=0;i<sentence.length;i++)
    {
        if(sentence[i]===sentence[i].toLowerCase())
        {
            string+=sentence[i].toUpperCase()
        }else
        {
            string+=sentence[i].toLowerCase()
        }
    }

    return string;
}

const letterCases = (sentence) =>
{
    let string = ""

    for(let i=0;i<sentence.length;i++)
    {
        if(sentence[i]===sentence[i].toLowerCase())
        {
            string+=sentence[i].toUpperCase()
        }else
        {
            string+=sentence[i].toLowerCase()
        }
    }

    return string;
}

letterCases("MeRRy hAD a LITTle lAMp")

module.exports = letterCases