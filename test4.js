const data = [10,20,30,40,50]

for(let i = 0; i<data.length;i++){
    if (data[i] > 30) break
    console.log("ลำดับที่ "+(i+1)+" = "+data[i]);
}


data.forEach(e => {
    console.log(`สมาชิกใน Arry Data = ${e}`);
});