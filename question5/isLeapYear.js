function isLeapYear(year)
{
    return year%4==0 && year%100!=0 || year%400==0
}


const isLeapYear = (year) =>  year%4==0 && year%100!=0 || year%400==0


isLeapYear(2004)

module.exports = isLeapYear
