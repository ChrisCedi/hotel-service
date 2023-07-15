document.addEventListener("DOMContentLoaded", function () {
  let tablaPosts = document.getElementById("tablaPosts");
  let tbody = tablaPosts.getElementsByTagName("tbody")[0];

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (post) {
        let row = document.createElement("tr");
        let userIdCell = document.createElement("td");
        userIdCell.textContent = post.userId;
        let idCell = document.createElement("td");
        idCell.textContent = post.id;
        let titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        let bodyCell = document.createElement("td");
        bodyCell.textContent = post.body;
        row.appendChild(userIdCell);
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(bodyCell);
        tbody.appendChild(row);

        row.addEventListener("click", function () {
          window.location.href = `/postId.html?id=${post.id}`;
        });
      });
    })
    .catch(function (error) {
      console.log("Hubo un error al cargar los posts:", error);
    });
});
