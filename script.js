function createPost(nombre, mensaje, urlImagen) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const imagen = document.createElement("img");
    imagen.src = urlImagen;
    tarjeta.appendChild(imagen);

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;
    tarjeta.appendChild(titulo);

    const texto = document.createElement("p");
    texto.textContent = mensaje;
    tarjeta.appendChild(texto);

    return tarjeta;
}

const posts = document.getElementById("posts");

for (let i = 1; i <= 826; i++) {
    const nombre = "Personaje " + i;
    const mensaje = "Esta es mi publicación numero " + i + ". Esto es una prueba de generación de relleno por medio de funciones y ciclos.";
    const urlImagen = "https://rickandmortyapi.com/api/character/avatar/" + i + ".jpeg";

    const tarjeta = createPost(nombre, mensaje, urlImagen);
    posts.appendChild(tarjeta);
}
