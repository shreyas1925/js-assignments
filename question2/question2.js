function checkDigits(number)
{
    let store = []
    while(number > 0)
    {
        let rem = number % 10;
        store.push(rem)
        number = Math.floor(number/10)
    }


    let key = store[0]
    for(let i =1;i<store.length;i++)
    {
        if(store[i]!=key)
        {
            return false;
        }
    }

    return true;

}

const checkDigits = (number) =>
{
    let store = []
    while(number > 0)
    {
        let rem = number % 10;
        store.push(rem)
        number = Math.floor(number/10)
    }


    let key = store[0]
    for(let i =1;i<store.length;i++)
    {
        if(store[i]!=key)
        {
            return false;
        }
    }

    return true;

}
checkDigits(22)

module.exports = checkDigits