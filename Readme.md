En esta clase, exploramos un concepto fundamental de JavaScript: El diagrama de clases. Aprenderemos cómo utilizar estos conceptos para representar la estructura y la organización de la información en JavaScript.

# I. UML

  > UML significa Unified Modeling Language, que en español se traduce como Lenguaje de Modelado Unificado. Es un lenguaje de modelado visual estandarizado utilizado en ingeniería de software para diseñar, especificar, visualizar y documentar sistemas de software. UML proporciona un conjunto de notaciones gráficas para representar varios aspectos de un sistema, incluyendo su estructura, comportamiento e interacciones.

  > Los diagramas UML se utilizan para comunicar y comprender los diferentes aspectos de un sistema de software. Ayudan a desarrolladores de software, diseñadores y partes interesadas a visualizar y analizar la arquitectura, el diseño y los requisitos del sistema. Los diagramas UML se pueden utilizar a lo largo del ciclo de vida del desarrollo de software, desde la recopilación y análisis de requisitos iniciales hasta la implementación y el mantenimiento del sistema.

 ## Diagramas
1. Diagramas de clases: Representan la estructura estática de un sistema, mostrando las clases, sus atributos, métodos, relaciones y asociaciones.
2. Diagramas de implementación: Representan la implementación física de los componentes de software en nodos o sistemas de hardware.
3. Diagramas de casos de uso: Representan las interacciones    entre los actores (usuarios o sistemas externos) y el sistema, mostrando los requisitos funcionales y los límites del sistema.
4. Diagramas de secuencia: Ilustran las interacciones entre objetos o componentes a lo largo del tiempo, mostrando el orden de los mensajes intercambiados entre ellos.
5. Diagramas de actividades: Representan el flujo de trabajo o los procesos de negocio dentro de un sistema, mostrando la secuencia de actividades, decisiones y rutas de bifurcación.
6. Diagramas de máquinas de estado: Representan el comportamiento de un sistema u objeto, mostrando los diferentes estados y las transiciones entre ellos.
7. Diagramas de componentes: Muestran los componentes físicos de un sistema y sus dependencias.
8. Diagramas de implementación: Representan la implementación física de los componentes de software en nodos o sistemas de hardware.


# II. Diagrama de Clases

- Definición de un Diagrama de Clases:
  > Es un tipo de diagrama de estructura estática que describe la estructura de un sistema mostrando las clases del sistema, sus atributos, operaciones (o métodos), las relaciones entre los objetos y su cardinalidad.
- Representación visual de las clases y sus relaciones en un diagrama de clases.
  > ![Diagrama de clases](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/KP-UML-Aggregation-20060420.svg/1920px-KP-UML-Aggregation-20060420.svg.png)

- Atributos
    - Visibilidad
        > `La visibilidad puede ser uno de los siguientes:`

       - "+" para público (public)
       - "-" para privado (private)
       - "#" para protegido (protected)
       - "~" para paquete (package)
    - Tipo
        > ` Se determina el tipo de dato que se necesita para el atributo: `
        - Primitivos (Integer, String, Boolean)
        - Compuestos (Array, Objeto)

- Metodos
    - Tipo

- Relaciones
    > `Asociación:` Representa una relación estructural entre dos o más clases. Indica que una clase está relacionada con otra clase en algún sentido. La asociación puede ser unidireccional o bidireccional. Se representa con una línea sólida entre las clases involucradas, y se pueden agregar multiplicidades y roles para especificar los detalles de la relación.

    > `Agregación:` Es un tipo especial de asociación que representa una relación de todo-a-parte entre las clases. Indica que una clase contiene a otras clases como parte de su estructura. La agregación se representa con un rombo blanco en el extremo de la clase que contiene a las partes.

    > `Composición:` Es similar a la agregación, pero con una relación más fuerte. Representa una relación de todo-a-parte en la que las partes solo existen dentro del todo y no pueden existir de forma independiente. La composición se representa con un rombo negro en el extremo de la clase que contiene a las partes.

    > `Herencia:` Representa una relación de herencia entre una clase base (superclase) y una clase derivada (subclase). La subclase hereda los atributos y métodos de la superclase, y puede añadir o sobrescribir su propio comportamiento. La herencia se representa mediante una flecha sólida con un triángulo vacío en el extremo de la clase derivada.

- Cardinalidad

 > La cardinalidad en las relaciones de un diagrama de clases UML indica la cantidad de instancias que pueden participar en una relación entre clases. La cardinalidad se utiliza para especificar las restricciones y las cantidades relativas de los objetos que pueden estar involucrados en una relación.

 > La cardinalidad se representa utilizando números o símbolos en los extremos de las líneas de asociación entre las clases. Aquí tienes una descripción de los símbolos más comunes utilizados para indicar la cardinalidad:

 - 1: Indica que exactamente una instancia del objeto está asociada con la otra clase.

 - 0..1: Indica que puede haber una instancia del objeto asociada o ninguna (opcionalidad).

 - 0..*: Indica que puede haber cualquier número de instancias del objeto asociadas o ninguna.

 - 1..*: Indica que debe haber al menos una instancia del objeto asociada, pero puede haber cualquier número de instancias adicionales.

 - n..m: Indica que debe haber al menos n instancias del objeto asociadas, y puede haber hasta m instancias.

- Simbologia

III. Clases en JavaScript

> En JavaScript, las clases se implementan utilizando la sintaxis de clase introducida en ECMAScript 2015 (ES6). Esta sintaxis proporciona una forma más clara y orientada a objetos de definir y crear objetos en JavaScript. Veamos cómo se utiliza esta sintaxis para crear clases en JavaScript:

- Declaración de la clase:
  Para declarar una clase en JavaScript, utilizamos la palabra clave class, seguida del nombre de la clase. Por ejemplo:

```js
class Persona {
  // contenido de la clase
}
```

- Constructor de la clase:
  El constructor es un método especial dentro de una clase que se utiliza para inicializar los objetos creados a partir de la clase. Se define utilizando la palabra clave constructor. Por ejemplo:

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

 En el ejemplo anterior, el constructor de la clase Persona acepta dos parámetros (nombre y edad) y asigna esos valores a las propiedades nombre y edad del objeto.

- Métodos de la clase:
  Los métodos son funciones definidas dentro de una clase y se utilizan para realizar operaciones en los objetos creados a partir de la clase. Se definen como funciones dentro del cuerpo de la clase. Por ejemplo:

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }

  obtenerEdad() {
    return this.edad;
  }
}
```
 En el ejemplo anterior, se han definido dos métodos: saludar() y obtenerEdad(). El método saludar() muestra un mensaje de saludo en la consola utilizando el valor de la propiedad nombre del objeto. El método obtenerEdad() devuelve el valor de la propiedad edad del objeto.

- Instanciación de la clase:
Para crear instancias u objetos de una clase, utilizamos la palabra clave new, seguida del nombre de la clase y los parámetros necesarios para el constructor. Por ejemplo:
```js
const persona1 = new Persona("Juan", 25);
```
En el ejemplo anterior, se ha creado una instancia de la clase Persona llamada persona1 con los valores "Juan" y 25 pasados al constructor.

- Uso de los métodos y propiedades:
Una vez que se ha creado una instancia de la clase, podemos acceder a los métodos y propiedades utilizando la notación de punto. Por ejemplo:

```js
console.log(persona1.nombre); // Salida: "Juan"
persona1.saludar(); // Salida: "Hola, mi nombre es Juan"
console.log(persona1.obtenerEdad()); // Salida: 25
```
En el ejemplo anterior, se accede a la propiedad nombre y se llama a los métodos saludar() y obtenerEdad() de la instancia persona1 de la clase Persona.

- Para utilizar la herencia de clases en JavaScript, puedes utilizar la palabra clave extends. Esto te permite crear una clase hija que hereda propiedades y métodos de una clase padre. Aquí tienes un ejemplo:

```js
class Empleado extends Persona {
  constructor(nombre, edad, salario) {
    super(nombre, edad);
    this.salario = salario;
  }

  mostrarSalario() {
    console.log(`Mi salario es ${this.salario}`);
  }
}
```
En este ejemplo, se ha creado la clase Empleado que extiende de la clase Persona. La clase Empleado hereda los atributos nombre y edad de la clase Persona utilizando la función super(). Además, se ha añadido el atributo salario específico de la clase Empleado y el método mostrarSalario().

---

## Estructura de carpetas
## JSON
JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y legible para humanos y máquinas. Se basa en la sintaxis de los objetos y arrays de JavaScript, lo que lo hace fácil de entender y utilizar en muchos lenguajes de programación.

Se utiliza comúnmente para transmitir y almacenar datos estructurados. Es ampliamente utilizado en aplicaciones web y servicios web como un formato estándar para intercambiar datos entre el servidor y el cliente. También se utiliza en configuraciones de archivos y almacenamiento de datos en bases de datos NoSQL.

La sintaxis básica de JSON consiste en pares de clave-valor que están separados por comas y encerrados entre llaves {} para objetos, o entre corchetes [] para arrays. Aquí hay un ejemplo de un objeto JSON que representa información de una persona:

```
{
    "nombre": "Jorge",
    "apellido": "Gonzales",
    "edad": 35,
    "ciudad": "Santiago"
} 
```

## Babel
  Babel es un popular compilador de JavaScript que te permite escribir código JavaScript moderno y convertirlo en una versión compatible que pueda ejecutarse en navegadores antiguos o en entornos que no admiten las últimas características de JavaScript. Permite a los desarrolladores utilizar la sintaxis más reciente, las características del lenguaje e incluso características experimentales, al tiempo que garantiza la compatibilidad con versiones anteriores.

  El propósito principal de Babel es transformar tu código fuente de una versión de JavaScript a otra. Utiliza una arquitectura basada en complementos, donde cada complemento realiza una transformación específica o una conversión de sintaxis. Babel puede convertir características de las versiones más nuevas de ECMAScript (ES6, ES7, etc.) a versiones más antiguas (ES5) que son ampliamente compatibles.

### Instalación de Dependencias

Para el uso correcto de Babel es necesario instalar las dependencias que se necesitan, estas son babel-core, babel-loader, babel-preset-env.

La instalación se hara con el siguiente comando: 
> npm install core-js --save-dev babel-loader @babel/core @babel/preset-env 

### Configuracion basica
> Crea un archivo con el nombre ".babelrc" dentro del archivo escribe lo siguiente:

```
{
    "presets": [["@babel/preset-env", {
        "targets":{
            "edge":"17",
            "firefox": "60",
            "chrome": "67",
            "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs": "3.30.2",
        "forceAllTransforms": true
    }]]
}

```
*las versiones dependeran de las versiones actuales a las que quieres apuntar la configuración*

## WEBPACK
Webpack es una poderosa herramienta de empaquetado y construcción de módulos para aplicaciones web. Se utiliza para agrupar, transformar y optimizar los recursos de una aplicación, como archivos JavaScript, CSS, imágenes y otros assets, para que puedan ser entregados de manera eficiente al navegador.

Webpack se basa en el concepto de módulos, lo que significa que puedes organizar tu código en diferentes archivos y dependencias, y luego utilizar Webpack para combinarlos en un único archivo de salida (o varios archivos si así lo configuras). Esto facilita el manejo de la complejidad de las aplicaciones web, ya que puedes dividir tu código en módulos más pequeños y mantener un flujo de trabajo más organizado.

Además de su capacidad para empaquetar y combinar archivos, Webpack ofrece una amplia gama de características adicionales, como:

Resolución de dependencias: Webpack puede analizar las dependencias entre módulos y construir un gráfico de dependencias para asegurarse de que los archivos necesarios se incluyan en el paquete final.

Carga de recursos: Webpack es compatible con una variedad de loaders que te permiten cargar y transformar diferentes tipos de archivos, como JavaScript, CSS, imágenes, fuentes, archivos JSON, entre otros.

Optimización: Webpack puede aplicar optimizaciones al código, como minimización, ofuscación y división de código, para reducir el tamaño del paquete resultante y mejorar el rendimiento de la aplicación.

Integración con el ecosistema de desarrollo: Webpack se puede integrar fácilmente con otras herramientas y frameworks populares, como Babel, TypeScript, React, Vue.js, entre otros, lo que te permite aprovechar sus funcionalidades y optimizaciones en conjunto.

En resumen, Webpack es una herramienta esencial para el desarrollo de aplicaciones web modernas. Te ayuda a gestionar y optimizar tus recursos, simplifica el manejo de dependencias y ofrece un flujo de trabajo eficiente para el desarrollo de proyectos frontend.

### Instalación de dependecias
> npm install webpack webpack-cli style-loader css-loader 

### Configuracion basica

```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
};
```
### Plugins y Rules

> npm install html-webpack-plugin mini-css-extract-plugin

Rules - CSS
```
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  },  
```
Plugins  Generador de HTML Y CSS 
```
plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin  ({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
```
