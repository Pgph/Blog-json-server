const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();
  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  await fetch("http://localhost:3000/posts", {
    method: "POST", // <--- Change this to POST
    body: JSON.stringify(doc), // <--- Convert data to JSON
    headers: { "Content-Type": "application/json" }, // <--- Tell the server we are sending JSON
  });
  window.location.replace("/index.html"); // <--- Redirect to index.html
};

form.addEventListener("submit", createPost); // <--- Add event listener to form
