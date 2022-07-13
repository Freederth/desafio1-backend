class Usuario {
	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros; // objeto de libros
		this.mascotas = mascotas; //array de objetos mascota.
	}
	getFullName = () => {
		return `${this.nombre} ${this.apellido}`;
	};
	addMascotas = nombreMascota => {
		this.mascotas.push(nombreMascota);
	};
	countMascotas = () => {
		return this.mascotas.length;
	};
	addBook = (nombreLibro, autorLibro) => {
		this.libros.push({
			nombreLibro: nombreLibro,
			autorLibro: autorLibro
		});
	};
	getBookNames = () => {
		return this.libros.map(libro => libro.nombreLibro);
	};
}

const elonmusk = new Usuario(
	"Elon",
	"Musk",
	[
		{ nombreLibro: "El señor de las moscas", autorLibro: "William Golding" },
		{ nombreLibro: "Fundacion", autorLibro: "Isaac Asimov" }
	],
	["Gata Ceniza"]
);

console.log("el usuario se llama: ", elonmusk.getFullName());
elonmusk.addMascotas("Perro Spike");
console.log("el usuario tiene: ", elonmusk.countMascotas(), " mascotas");
elonmusk.addBook("El señor de los anillos", "J.R.R. Tolkien");
console.log("el usuario tiene estos libros: ", elonmusk.getBookNames());
