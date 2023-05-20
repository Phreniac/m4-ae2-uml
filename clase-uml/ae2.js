//Relaciones de clases
//Declaración de una clase

//clase arbol

class Arbol {
    constructor(nombre, tipo, altura, frutas, raiz){
        this.nombre = nombre;
        this.tipo = tipo;
        this.altura = altura;
        this.frutas = frutas;
        this.raiz = raiz;
    }
}

class Fruta {
    constructor(nombre, color, peso){
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
    }
    #cantidad_pepas;

    get cantidadPepas(){
        return this.#cantidad_pepas;
    }
    set cantidadPepas(cantidad){
        this.#cantidad_pepas = cantidad;
    }
}

class Raiz {
    constructor(largo, grosor){
        this.largo = largo;
        this.grosor = grosor;
    }
}

//ejemplificacion de construccion de objetos
const fruta1 = new Fruta('Manzana','Rojo','60g');
fruta1.cantidadPepas = 20;
console.log('pepas: ', fruta1.cantidadPepas);
const fruta2 = new Fruta('Manzana','Rojo','62g');
const raiz1 = new Raiz('3 mt','30cm');
const raiz2 = new Raiz('3 mt','30cm');
const raiz3 = new Raiz('3 mt','30cm');
const arbol1 = new Arbol('Manzano', 'frutal', '1,5 mt',[fruta1,fruta2], [raiz1,raiz2,raiz3]);

console.log('arbol: ', arbol1);