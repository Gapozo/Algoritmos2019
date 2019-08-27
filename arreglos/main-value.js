//hallar minimo/maximo de los valores del arreglo

let a = [4,8,2,5,10,3]
let average = getAverage(a)

console.log("suma de elementos: " + getAverage(a))
console.log("indice de la media: " + getMinValue(a))


function getAverage(a){
    let sum = 0
    for (let i = 0; i< a.length; i++){
        sum = sum + a[i]

    }
    return sum/ a.length
}


function getMinValue(a){

    if(a.length==0) return -1

    let min =a[0]
    let minIndex = 0

for (let i = 0; i< a.length; i++){
    if(DistanceToAverage(a[i]) < min){

     min = DistanceToAverage(a[i]) 
     minIndex = i
    }

 }

 return minIndex

}

function DistanceToAverage(n) {
    return Math.abs(n - average)
}
