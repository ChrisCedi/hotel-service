const nextView = () => {
  document.getElementById("section2").scrollIntoView({
    behavior: "smooth",
  });
};

let buttonHome = document.getElementById("next-section-button");

buttonHome.addEventListener("click", nextView);

document.addEventListener("DOMContentLoaded", function () {
  let listaHoteles = document.getElementById("listaHoteles");

  fetch("https://www.cityexpress.com/data/autocomplete.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (hotel) {
        let card = document.createElement("div");
        card.classList.add("card");

        let nombre = document.createElement("h2");
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
          // card.remove();
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
      });
    })
    .catch(function (error) {
      console.log("Hubo un error al cargar los hoteles:", error);
    });
});
