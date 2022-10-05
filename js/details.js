const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details"); // select the container
const deleteBtn = document.querySelector(".delete"); // select the delete button

const renderDetails = async () => {
  let uri = `http://localhost:3000/posts/${id}`; // <--- Change this to your URL
  const res = await fetch(uri); // fetch the data from the url
  const post = await res.json(); // convert the data to json

  let template = `
        <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body}</p>
        </div>
    `;
  container.innerHTML = template;
};

deleteBtn.addEventListener("click", async (e) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
  window.location.replace("/index.html");
});

window.addEventListener("load", () => renderDetails());
