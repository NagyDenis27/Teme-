function runPostsApp() {
  var postsBaseUrl = "https://jsonplaceholder.typicode.com";
  var postsContainerEl = document.querySelector("#posts-container");

  function renderPostList(posts) {
    posts.forEach(function (post) {
      var postDiv = createPost(post);
      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
      }
    });
  }

  function createPost(post) {
    var updateButton = document.querySelector("#updatePost");
    var modalCancelButton = document.querySelector("#cancelPost");

    var div = document.createElement("div");
    var delButton = document.createElement("button");
    delButton.innerHTML = "Delete <style >";

    var edButton = document.createElement("button");
    edButton.innerHTML = "Edit Post";

    //delete post
    delButton.onclick = function () {
      fetch(postsBaseUrl + "/posts/" + post.id, {
        method: "DELETE",
      }).then((response) => {
        if (response) {
          div.remove();
        }
        return response;
      });
    };

    //edit post
    edButton.onclick = function () {
      document.getElementById("editPostModal").classList.add("modalDisplay");
      document.getElementById("editPostModal").classList.remove("modalHidden");

      var inputTitle = (document.getElementById("title").value = post.title);
      var inputBody = (document.getElementById("body").value = post.body);

      //update post

      updateButton.onclick = () => {
        const updTitle = document.getElementById("title").value;
        const updBody = document.getElementById("body").value;

        fetch(postsBaseUrl + "/posts/" + post.id, {
          method: "PUT",
          body: JSON.stringify({
            title: updTitle,
            body: updBody,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .then(
            (div.innerHTML =
              "<div class='post-title'>" +
              "<h2>" +
              updTitle +
              "</h2>" +
              "</div><p class='post-body'>" +
              updBody +
              "</p>")
          )
          .then((div.appendChild(delButton), div.appendChild(edButton)));
      };
    };

    //cancel post
    modalCancelButton.onclick = function () {
      document.getElementById("editPostModal").classList.remove("modalDisplay");
      document.getElementById("editPostModal").classList.add("modalHidden");
    };

    //post.id
    div.innerHTML =
      "<div class='post-title'>" +
      "<h2>" +
      post.title +
      "</h2>" +
      "</div><p class='post-body'>" +
      post.body +
      "</p>";

    div.appendChild(delButton);
    div.appendChild(edButton);

    return div;
  }

  fetch(postsBaseUrl + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostList(posts);
    });
}

var pageInit = function () {
  runPostsApp();
};

window.addEventListener("load", function () {
  pageInit();
});
