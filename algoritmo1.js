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
        const costoFijoPapeleria = 20000;
        const costoFijoCarnet = 8000;
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
        return valorTotal - (costoFijoPapeleria + costoFijoCarnet);
    }
    
}

document.getElementById("botonValorTotal").addEventListener('click', function() {



});




