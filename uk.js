const randomNum = (min ,max) => {
    return Math.floor(math.random() * ( max - min) +min)
}

const res1=[]
for(var i = 0; i < 100; i++) {
    res1.push(randomNum(-100,100))
}
console.log(res)
 

/*const res2=[]
for(var i = 0; i < res1.length; i++) {
    if(!res2.includes(res1[1])) res2.push(res[i])
}
console.log(res2)*/

const feq = {}

for (var i =0; i<res1.length ;i++) {
    if(feq[`${res1[i]}`]) feq[`${res1[i]}`] =1
    else feq[`${res1[i]}`] = feq[`${res1[i]}`] +1
}
console.log(res1)
console.log(feq)


