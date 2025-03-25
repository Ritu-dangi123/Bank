const accountNumber = ()=>{



    let string = "1234567890"
    let acc = ""
    for(var i = 0 ;  i<18; i++)
    {
     let myno = Math.floor(Math.random()*string.length)
     acc += string.charAt(myno)
    }
    return acc;
}
module.exports = {
    accountNumber
}