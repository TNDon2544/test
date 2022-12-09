sum=(...arr)=>{
    let total=0
    for(let number of arr) total+=number
    return total
}

console.log(sum(100,200,15,55,1000));