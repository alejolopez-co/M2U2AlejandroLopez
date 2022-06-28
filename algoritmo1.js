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

    let estudiante = new Estudiante("Alejo Lopez", 4);
    estudiante.nuevaMateria("Ingles", 200000);
    estudiante.nuevaMateria("Matemáicas", 200000);
    estudiante.nuevaMateria("Español", 200000);
    estudiante.nuevaMateria("Educación fisica", 200000);

    document.getElementById("mostrarValorTotal").innerHTML = `El vaor total es ${estudiante.getValorTotalConDescuento()}`;

});




