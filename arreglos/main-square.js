//hallar el minimo de los cuadrados
let a = [4, 8, 1, 5, 10, 3]

console.log(getMin(a))



function getMin(a) {
    let min =a[0]
for (let i = 0; i< a.length; i++){
    if(square(a[i]) < min) min = square(a[i])

}

return min

}

function square(n) //creamos esta funcion para definir los cuadrados
{
    return n * n
}




