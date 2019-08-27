//hallar el minimo de los cuadrados
let notas = [16, 17, 15, 13, 16, 20, 18,11]
let b =[1,5,7,4]

console.log("la menor nota del indice es: " + getMin(b))



function getMin(a) {
    let min = nota(a[0])
for (let i = 0; i< a.length; i++){
    if(nota(a[i]) < min) min = nota(a[i])

}

return min

}

function nota(n) //creamos esta funcion para sacar las notas de los indices
{
    return notas[n]
}
