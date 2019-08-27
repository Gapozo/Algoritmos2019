// obtener el indice del min/max

let a = [4, 8, 1, 5, 10, 3]


console.log(getMaxIndex(a))
console.log(getMinIndex(a))

    function getMinIndex(a){

    if(a.length==0) return -1 // si el arreglo esta vacio es -1
    let min =a[0] // hago que el minimo sea el primer valor
    let minIndex = 0 // hago que el index comience del  0, en este caso 0 = 4
    
    for (let i = 0; i< a.length; i++){
        if(a[i] < min) // comparamos el primer minimo con los otros del arreglo, 
         {
            min = a[i]  // si el actual comparado es menor se queda, si no, cambia
            minIndex = i // el index es el valor del nuevo minimo
        }
    
    }
    
    return minIndex
    
    }

    function getMaxIndex(a){

        if(a.length==0) return -1
        let max =a[0]
        let maxIndex = 0
        
        for (let i = 0; i< a.length; i++){
            if(a[i] > max) {
                max = a[i]
                maxIndex = i
            }
        
        }
        
        return maxIndex
        
        }
    

