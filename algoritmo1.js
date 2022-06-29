class Materia {
    
    constructor (materia, costo) {
        this.materia = materia;
        this.costo = costo;
    }

    getMateria() {
        return this.materia;
    }

    getCosto() {
        return this.costo;
    }

}


class Estudiante {
 
    constructor (nombreEstudiante, cantidadMaterias) {
        this.nombreEstudiante = nombreEstudiante;
        this.cantidadMaterias = cantidadMaterias;
        this.materias = [];
        this.costoFijoPapeleria = 20000;
        this.costoFijoCarnet = 8000;
        this.porcentajeDescuento = 20;
    }

    nuevaMateria(materia, costo) {
        let nuevaMateria = new Materia(materia, costo);
        this.materias.push(nuevaMateria);
    }

    elimiminarMateria(posicion) {
        this.materias.splice(posicion, 1);
    }

    getValorTotalConDescuento() {
        let valorTotal = 0;
        this.materias.forEach(materia => {
            valorTotal += materia.getCosto();
        });
        return (valorTotal - (valorTotal/100)*this.porcentajeDescuento) + (this.costoFijoPapeleria + this.costoFijoCarnet);
    }
    
}

function tieneValoresCorrectos(tablaMaterias, filaTabla, indexCelda) {

    if (tablaMaterias.rows.length <= 2) {
        return false;
    }

    switch (indexCelda) {
        case 0:
            //let nombreEstudiante = filaTabla.cells[indexCelda].getElementsByTagName('input')[0].value;
            let nombreEstudiante = filaTabla.cells[indexCelda].innerText;
            if (nombreEstudiante === '' || nombreEstudiante === null)  {
                document.getElementById("mostrarValorTotal").innerHTML = `ERROR: debe ingresar un estudiante válido`;
                return false;
            }
            break;

        case 1:
            //let materiaEstudiante = filaTabla.cells[indexCelda].getElementsByTagName('input')[0].value;
            let materiaEstudiante = filaTabla.cells[indexCelda].innerText;
            if (materiaEstudiante === '' || materiaEstudiante === null)  {
                document.getElementById("mostrarValorTotal").innerHTML = `ERROR: debe ingresar una materia válida`;
                return false;
            }
            break;

        case 2:
            let costoMateria =  parseInt(filaTabla.cells[indexCelda].getElementsByTagName('input')[0].value);
            if (costoMateria < 0 || isNaN(costoMateria))  {
                document.getElementById("mostrarValorTotal").innerHTML = `ERROR: debe ingresar un costo válido`;
                return false;
            }
            break;
    
            
        default:
            break;
    }

    return true;
}

document.getElementById("botonValorTotal").addEventListener('click', function(event) {

    let tablaMaterias = document.getElementById("tablaMaterias");

    if (tablaMaterias.rows.length > 2) {
        const fila = tablaMaterias.rows[2];
        
        // Validación campo Estudiante
        if (!tieneValoresCorrectos(tablaMaterias, fila, 0)) {
            //event.preventDefault();
            return false;
        }


        //let nombreEstudiante = fila.cells[0].getElementsByTagName('input')[0].value;
        let nombreEstudiante = fila.cells[0].innerText;
        let estudiante = new Estudiante(nombreEstudiante, 4);
        let materiaEstudiante = '';
        let costoMateria = 0;
        for (let index = 2; index < tablaMaterias.rows.length; index++) {
            const fila = tablaMaterias.rows[index];
            for (let index_2 = 1; index_2 < fila.cells.length; index_2++) {
                
                // Validación campo Estudiante
                if (!tieneValoresCorrectos(tablaMaterias, fila, index_2)) {
                    //event.preventDefault();
                    return false;
                }

                switch (index_2) {
                    case 1:
                        //materiaEstudiante = fila.cells[index_2].getElementsByTagName('input')[0].value;
                        materiaEstudiante = fila.cells[index_2].innerText;
                        break;
                    case 2:
                        costoMateria =  parseInt(fila.cells[index_2].getElementsByTagName('input')[0].value);
                        break;
                    
                    default:
                        break;
                }

            }
            estudiante.nuevaMateria(materiaEstudiante, costoMateria);
        }
        document.getElementById("mostrarValorTotal").innerHTML = `El valor total es ${estudiante.getValorTotalConDescuento()}`;
    }

});




