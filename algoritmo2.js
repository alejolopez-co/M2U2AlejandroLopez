class OperacionAlgoritmica {
    
    constructor (valoresNumericos) {
        this.valoresNumericos = valoresNumericos;
        this.valorMayor = valoresNumericos[0];
        this.valorMenor = valoresNumericos[0];
    }

    guardarMayoryMenor() {
        for (let index = 0; index < this.valoresNumericos.length; index++) {
            
            // Guardar el mayor valor númerico dentro del array
            if (this.valoresNumericos[index] > this.valorMayor) {
                this.valorMayor =  this.valoresNumericos[index];
            }

            // Guardar el menor valor númerico dentro del array
            if (this.valoresNumericos[index] < this.valorMenor) {
                this.valorMenor = this.valoresNumericos[index];
            }

        }
    }

    tieneValoresNumericos() {
        for (let index = 0; index < this.valoresNumericos.length; index++) {
            if (isNaN(this.valoresNumericos[index])) {
                return false;
            }
        }
        return true;
    }

    tieneValoresDistintos() {
        for (let index_1 = 0; index_1 < this.valoresNumericos.length; index_1++) {
            const valor = this.valoresNumericos[index_1];
            for (let index_2 = 0; index_2 < this.valoresNumericos.length; index_2++) {
                if ((valor === this.valoresNumericos[index_2] ) && ( index_1 != index_2 )) {
                    return false;
                }
            }
        }
        return true;
    }

    getValorMayor() {
        return this.valorMayor;
    }

    getValorMenor() {
        return this.valorMenor;
    }


}


document.getElementById("botonCalcular1").addEventListener("click", function(){

    const valoresAlgoritmo2 = [];
    document.getElementById('resultado').innerHTML="";

    valoresAlgoritmo2[0] = parseInt(variableA.value);
    valoresAlgoritmo2[1] = parseInt(variableB.value);
    valoresAlgoritmo2[2] = parseInt(variableC.value);
    valoresAlgoritmo2[3] = parseInt(variableD.value);

    let algoritmo2 = new OperacionAlgoritmica(valoresAlgoritmo2);
    
    if (algoritmo2.tieneValoresNumericos()) {
        // Validar si se ingresaron valores iguales entonces muestra mensaje de error
        if (algoritmo2.tieneValoresDistintos()) {
            algoritmo2.guardarMayoryMenor();
            document.getElementById("resultado").innerHTML=`El valor mayor es ${algoritmo2.getValorMayor()} y el menor es ${algoritmo2.getValorMenor()}`;
        } else {
            document.getElementById("resultado").innerHTML="ERROR: todos los valores deben ser distintos";
        }
    } else {
        document.getElementById("resultado").innerHTML="ERROR: ingresar valores que sean númericos";
    }
     
 });



