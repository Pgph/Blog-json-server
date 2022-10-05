const container = document.querySelector(".blogs"); // select the container
const searchForm = document.querySelector(".search");

const renderPosts = async (term) => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc"; // <--- Change this to your URL
  if (term) {
    uri += `&q=${term}`; // <--- Change this to your query parameter
  }

  const res = await fetch(uri); // fetch the data from the url
  const posts = await res.json(); // convert the data to json

  let template = "";
  posts.forEach((post) => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html?id=${post.id}">read more...</a>
      </div>
    `;
  });
  container.innerHTML = template;
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("load", () => renderPosts());
