document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get("id");

  if (idParam) {
    fetch("https://jsonplaceholder.typicode.com/posts?id=" + idParam)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data[0]);
        let post = data[0];

        let postTitle = document.getElementById("postTitle");
        let postBody = document.getElementById("postBody");

        postTitle.textContent = post.title;
        postBody.textContent = post.body;
      })
      .catch(function (error) {
        console.log("Hubo un error al cargar el post:", error);
      });
  }
});

goBack = () => {
  history.back();
};
