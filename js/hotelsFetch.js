//funcion fetch
document.addEventListener("DOMContentLoaded", function () {
  let listaHoteles = document.getElementById("hotel-list");

  let counter = 0;

  fetch("https://www.cityexpress.com/data/autocomplete.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (hotel) {
        if (counter < 50) {
          let card = document.createElement("div");
          card.classList.add("card");

          let nombre = document.createElement("h3");
          nombre.textContent = hotel.label;
          card.appendChild(nombre);

          let tipo = document.createElement("p");
          tipo.textContent = "Tipo: " + hotel.tipo;
          card.appendChild(tipo);

          let marca = document.createElement("p");
          marca.textContent = `Marca: ${
            hotel.marca == "" ? "no especificada" : hotel.marca
          } `;
          card.appendChild(marca);

          let codigo = document.createElement("p");
          codigo.textContent = `Código: ${
            hotel.CODIGO == "" ? "no definido" : hotel.CODIGO
          }`;
          card.appendChild(codigo);

          let botonEditar = document.createElement("button");
          botonEditar.textContent = "Editar";
          botonEditar.classList.add("edit-button");
          botonEditar.addEventListener("click", function () {
            alert(`boton para editar: ${hotel.label}`);
          });
          card.appendChild(botonEditar);

          let botonBorrar = document.createElement("button");
          botonBorrar.textContent = "Borrar";
          botonBorrar.classList.add("delete-button");
          botonBorrar.addEventListener("click", function () {
            card.remove();
          });
          card.appendChild(botonBorrar);

          listaHoteles.appendChild(card);
          counter++;
        }
      });
    })
    .catch(function (error) {
      console.log("Hubo un error al cargar los hoteles:", error);
    });
});
