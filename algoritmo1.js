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

document.getElementById("botonValorTotal").addEventListener('click', function() {

    let tablaMaterias = document.getElementById("tablaMaterias");

    if (tablaMaterias.rows.length > 1) {
        const fila = tablaMaterias.rows[2];
        let nombreEstudiante = fila.cells[0];
        let estudiante = new Estudiante(nombreEstudiante.innerHTML, 4);
        let materiaEstudiante = '';
        let costoMateria = 0;
        for (let index = 2; index < tablaMaterias.rows.length; index++) {
            const fila = tablaMaterias.rows[index];
            for (let index_2 = 2; index_2 < fila.cells.length; index_2++) {
                switch (index_2) {
                    case 1:
                        materiaEstudiante = fila.cells[index_2].innerHTML;
                        break;
                    case 2:
                        costoMateria =  parseInt(fila.cells[index_2].innerHTML);
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




